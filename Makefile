FILES=$(shell docker ps -a -q --filter "name=swagger-api*")
VERSION := $(shell git describe --tags --exact-match 2>/dev/null || echo latest)
DOCKERHUB_NAMESPACE ?= sumelms
IMAGE := ${DOCKERHUB_NAMESPACE}/swagger-api:${VERSION}
API := account-api

mock-build:
	@docker build . -t ${IMAGE} -f ./docker/Dockerfile.swagger

mock-up:
	@docker-compose -f docker/docker-compose-swagger.yml up -d

mock-down:
	@docker-compose -f docker/docker-compose-swagger.yml down

swagger-ui:
	@docker-compose -f docker/docker-compose-swagger.yml up swagger-ui

swagger-ui-down:
	@docker-compose -f docker/docker-compose-swagger.yml stop swagger-ui

swagger-editor:
	@docker-compose -f docker/docker-compose-swagger.yml up swagger-editor

swagger-editor-down:
	@docker-compose -f docker/docker-compose-swagger.yml stop swagger-editor

