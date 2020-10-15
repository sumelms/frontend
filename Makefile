FILES=$(shell docker ps -a -q --filter "name=swagger-api*")
VERSION := $(shell git describe --tags --exact-match 2>/dev/null || echo latest)
DOCKERHUB_NAMESPACE ?= sumelms
IMAGE := ${DOCKERHUB_NAMESPACE}/swagger-api:${VERSION}
API := account-api

all: bash

bash:
	@docker-compose exec swagger-api /bin/sh

mock-build:
	@docker build . -t ${IMAGE} -f ./docker/Dockerfile_swagger

mock-dev:
	$(MAKE) mock-build
	@docker run --rm -p ${PORT}:${PORT} --name=${API} -d -v ${PWD}/fake-api/swagger:/swagger danielgtaylor/apisprout /swagger/${API}.yaml -p ${PORT} --watch
	
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