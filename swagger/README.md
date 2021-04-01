# Mocks and Docs

All the REST API must use the OpenAPI Specification version 3 and the documentation will be centralized in this repository using swagger to build the mocks server.

To mock server, we are using [openapi-mock](https://github.com/muonsoft/openapi-mock)

## Table of Contents

- [Swagger Files](#swagger-files)
- [Commands](#commands)
- [How to consume the fake API](#how-to-consume-the-fake-api)

## Swagger Files

Should use the following name convention `{service}-api.yaml` and must be stored inside the `fake-api/swagger` folder.

## Commands

Run swagger editor to create or update a documentation

```
make swagger-editor
```

Stop swagger editor

```
make swagger-editor-stop
```

Run swagger-ui to see the definitions of the API

```
make swagger-ui
```

Stop swagger-ui

```
make swagger-ui-down
```

To start the mocks server

```
make mock-up
```

To stop the mocks server

```
make mock-down
```

## How to consume the fake API

After starting the mocks, to generate fakes responses data by the APIs schemas, we can make an `HTTP` request to any endpoint path defined on the swagger schema.

We can use some tool like `insomnia`, `postman` or `curl` to test the responses from the APIs.

To test that the server successfully ran

```
# ACCOUNT

curl --request GET \
  --url http://0.0.0.0:8000/users \
  --header 'content-type: application/json'

# CATALOG

curl --request GET \
  --url http://localhost:8001/categories
```

List of APIs and ports

| API         | PORT |
| ----------- | ---: |
| ACCOUNT-API | 8000 |
| CATALOG-API | 8001 |
