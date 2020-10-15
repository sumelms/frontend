## Mocks and Docs

All the REST API must use the OpenAPI Specification version 3 and the documentation will be centralized in this repository using swagger to build the mocks server.

---

## Table of Contents

- [Swagger Files](#swagger-files)
- [Commands](#commands)

---

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
