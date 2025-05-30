# Gr4vy Postman Collection

![CI](https://github.com/gr4vy/gr4vy-postman/workflows/Generate/badge.svg) 

[Postman](https://www.getpostman.com/) is a tool that lets you build and test HTTP requests in an easy-to-use interface without configuring a full development environment. Our official Postman Collection allows you to quicly get started with the [Gr4vy APIs](https://gr4vy.com/) in Postman.

## Usage

Our Postman Collection is updated every few weeks based on our OpenAPI specification.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/11991320-b51def04-138d-4b15-90f0-3f795b889820?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D11991320-b51def04-138d-4b15-90f0-3f795b889820%26entityType%3Dcollection%26workspaceId%3De6fdb014-7757-4909-98ae-c50d97ddb383)

For the latest build, you can import the local [`Gr4vy.postman_collection.json`](Gr4vy.postman_collection.json) into your Postman manually.

## Environment

To get started with our postman collection you also need to set up some environment variables. This Postman Environment will get you started.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/gr4vy-com/gr4vy-public/environment/11991320-40e8d3e3-b694-428e-9a58-c38359120620/gr4vy-environment?action=share&creator=11991320&active-environment=11991320-40e8d3e3-b694-428e-9a58-c38359120620)

Once set up, make sure to configure the following fields with your own values.

* `baseUrl` - Please set this to your own production or sandbox URL.
* `privateKey` - Set this to the RSA private key you prefer to use
* `thumbprint` - The thumbprint, or key ID, for the private key. This is visible in our dashboard.
* `scopes` -  A list of API scopes to use for each request.
* `embed` - Any additional embed params you want to add.

For the latest build, you can import the local [`Gr4vy.postman_environment.json`](Gr4vy.postman_environment.json) into your Postman manually.
