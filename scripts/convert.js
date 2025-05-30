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

const INFO = {
		"_postman_id": "466eb9e2-ed08-473d-804e-7043b3fd35c1",
		"name": "Gr4vy",
		"description": "The Gr4vy API.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "11991320",
		"_collection_link": "https://www.postman.com/gr4vy-com/workspace/gr4vy-public/collection/11991320-466eb9e2-ed08-473d-804e-7043b3fd35c1?action=share&source=collection_link&creator=11991320"
	}

Converter.convert(
  { type: "string", data: openapi, },
  { folderStrategy: "Tags", alwaysInheritAuthentication: true },
  (_, conversionResult) => {
    if (!conversionResult.result) {
      console.log("Could not convert", conversionResult.reason);
    } else {
      const collection = conversionResult.output[0].data;
      collection["auth"] = AUTH;
      collection["info"] = INFO;
      delete collection["event"];
      delete collection["variable"];

      fs.writeFileSync("Gr4vy.postman_collection.json", JSON.stringify(collection, null, 2), { encoding: "UTF8" });
    }
  }
);
