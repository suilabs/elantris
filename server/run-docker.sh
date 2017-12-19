#!/usr/bin/env bash
docker build -t graphql . && \
docker run -d --restart always -p 0.0.0.0:4000:4000 -v ${PWD}/storage:/usr/src/app/storage graphql
