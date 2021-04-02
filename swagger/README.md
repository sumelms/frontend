# Mocks and Docs

All the REST API must use the OpenAPI Specification version 3 and the documentation will be centralized in this repository using swagger to build the mocks server.

To mock server, we are using [openapi-mock](https://github.com/muonsoft/openapi-mock)

## Table of Contents

- [Swagger Files](#swagger-files)
- [Consuming the fake API](#consuming-the-fake-api)

## Swagger Files

It should use the following name convention `{service}-api.yaml` and it must be stored on its own microservice repository. The only exception is to mock some external services, in this case, those files can be stored inside the `swagger/data` folder.

## Consuming the fake API

After starting the mocks, to generate fakes response data by the APIs schemas, we can make an `HTTP` request to any endpoint path defined on the swagger schema.

We can use some tools like `insomnia`, `postman`, or `curl` to test the responses from the APIs.

First you need to run the container:

```sh
$ podman-compose up
```

This command should execute an `nginx` container that is acting as a gateway. If everything is working you should be able to consume the API like the example below:

```
curl --request GET --url http://localhost:8888/account/users
```
