const fs = require("fs");
const Converter = require("openapi-to-postmanv2");
const openapi = fs.readFileSync("openapi.json", { encoding: "UTF8" });

const AUTH = {
  type: "jwt",
  jwt: [
    {
      key: "header",
      value: '{\n  "kid": "{{thumbprint}}"\n}',
      type: "string",
    },
    {
      key: "payload",
      value: '{\n  "scopes": {{scopes}},\n  "embed": {{embed}}\n}',
      type: "string",
    },
    {
      key: "privateKey",
      value: "{{privateKey}}",
      type: "string",
    },
    {
      key: "algorithm",
      value: "ES512",
      type: "string",
    },
    {
      key: "secret",
      value: "{{privateKey}}",
      type: "string",
    },
    {
      key: "isSecretBase64Encoded",
      value: false,
      type: "boolean",
    },
    {
      key: "addTokenTo",
      value: "header",
      type: "string",
    },
    {
      key: "headerPrefix",
      value: "Bearer",
      type: "string",
    },
    {
      key: "queryParamKey",
      value: "token",
      type: "string",
    },
  ],
};

// The UID of the published collection, as "<ownerId>-<collectionId>". Supplied by
// the POSTMAN_COLLECTION_ID repository variable so it is defined in one place and
// cannot drift from the collection the workflow pushes to.
const COLLECTION_UID = process.env.POSTMAN_COLLECTION_ID || "";
const separatorIndex = COLLECTION_UID.indexOf("-");

if (separatorIndex < 1) {
  console.error(
    "POSTMAN_COLLECTION_ID must be set to a collection UID, " +
      "e.g. 11991320-46b91ff9-d361-420d-b5b6-a2f139cb4e4e"
  );
  process.exit(1);
}

const OWNER_ID = COLLECTION_UID.slice(0, separatorIndex);
const COLLECTION_ID = COLLECTION_UID.slice(separatorIndex + 1);

const INFO = {
  "_postman_id": COLLECTION_ID,
  "name": "Gr4vy",
  "description": "The Gr4vy API.",
  "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
  "_exporter_id": OWNER_ID,
  "_collection_link": `https://www.postman.com/gr4vy-com/workspace/gr4vy-public/collection/${COLLECTION_UID}?action=share&source=collection_link&creator=${OWNER_ID}`
}

const EVENT = [
  {
    "listen": "prerequest",
    "script": {
      "type": "text/javascript",
      "exec": [
        "pm.request.headers.add({key: 'X-GR4VY-MERCHANT-ACCOUNT-ID', value: pm.environment.get(\"merchantAccountId\") });"
      ]
    }
  }
]

Converter.convert(
  { type: "string", data: openapi, },
  { folderStrategy: "Tags", alwaysInheritAuthentication: true, enableOptionalParameters: false, exampleParametersResolution: "Schema" },
  (_, conversionResult) => {
    if (!conversionResult.result) {
      console.log("Could not convert", conversionResult.reason);
    } else {
      const collection = conversionResult.output[0].data;
      collection["auth"] = AUTH;
      collection["info"] = INFO;
      collection["event"] = EVENT;
      delete collection["variable"];

      fs.writeFileSync("Gr4vy.postman_collection.json", JSON.stringify(collection, null, 2), { encoding: "UTF8" });
    }
  }
);
