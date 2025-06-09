# Gr4vy Postman Collection


[Postman](https://www.getpostman.com/) is a tool that lets you build and test HTTP requests in an easy-to-use interface without configuring a full development environment. Our official Postman Collection allows you to quicly get started with the [Gr4vy APIs](https://gr4vy.com/) in Postman.

## Usage

Our Postman Collection is updated every few weeks based on our OpenAPI specification. 

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/11991320-db323997-9173-43d2-a2e9-2a70eb63e2f8?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D11991320-db323997-9173-43d2-a2e9-2a70eb63e2f8%26entityType%3Dcollection%26workspaceId%3De6fdb014-7757-4909-98ae-c50d97ddb383#?env%5BGr4vy%20-%20Environment%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5leGFtcGxlLmdyNHZ5LmFwcCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5leGFtcGxlLmdyNHZ5LmFwcCIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5leGFtcGxlLmdyNHZ5LmFwcCIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJwcml2YXRlS2V5IiwidmFsdWUiOiItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbi4uLlxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG4uLi5cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0iLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6Ii0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuLi4uXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6InRodW1icHJpbnQiLCJ2YWx1ZSI6IlRvS2k5VEc1X21QV2VqUVh2ZE9rLi4uIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJUb0tpOVRHNV9tUFdlalFYdmRPay4uLiIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiVG9LaTlURzVfbVBXZWpRWHZkT2suLi4iLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5Ijoic2NvcGVzIiwidmFsdWUiOiJbXCIqLnJlYWRcIiwgXCIqLndyaXRlXCJdIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJbXCIqLnJlYWRcIiwgXCIqLndyaXRlXCJdIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJbXCIqLnJlYWRcIiwgXCIqLndyaXRlXCJdIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6ImVtYmVkIiwidmFsdWUiOiJ7fSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoie30iLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6Int9Iiwic2Vzc2lvbkluZGV4Ijo0fSx7ImtleSI6Im1lcmNoYW50QWNjb3VudElkIiwidmFsdWUiOiJkZWZhdWx0IiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJkZWZhdWx0IiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJkZWZhdWx0Iiwic2Vzc2lvbkluZGV4Ijo1fV0=)

This will allow you to fork our collection, which includes a sample set of environment variables.
Once set up, ensure that you configure the following environment variables with your own values.

* `baseUrl` - Please set this to your own production or sandbox URL.
* `privateKey` - Set this to the RSA private key you prefer to use
* `thumbprint` - The thumbprint, or key ID, for the private key. This is visible in our dashboard.
* `scopes` -  A list of API scopes to use for each request.
* `embed` - Any additional embed params you want to add.
* `merchantAccountId` - The merchant account ID on your instance.

For the latest build, you can import the local [`Gr4vy.postman_environment.json`](Gr4vy.postman_environment.json) into your Postman manually.
