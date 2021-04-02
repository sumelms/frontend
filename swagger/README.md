# Mocks and Docs

All the REST API must use the OpenAPI Specification version 3 and the documentation will be centralized in this repository using swagger to build the mocks server.

To mock server, we are using [openapi-mock](https://github.com/muonsoft/openapi-mock)

## Table of Contents

- [Swagger Files](#swagger-files)
- [Commands](#commands)
- [How to consume the fake API](#how-to-consume-the-fake-api)

## Swagger Files

Should use the following name convention `{service}-api.yaml` and must be stored inside the `data` folder.

## How to consume the fake API

After starting the mocks, to generate fakes responses data by the APIs schemas, we can make an `HTTP` request to any endpoint path defined on the swagger schema.

We can use some tool like `insomnia`, `postman` or `curl` to test the responses from the APIs.

To test that the server successfully ran

## Catalog

```
curl --request GET \
  --url http://localhost:8001/categories
```
