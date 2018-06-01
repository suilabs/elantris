#!/usr/bin/env bash

ssh suilabs@suilabs.com <<< "
cd Projects/suilabs
git fetch && \
git pull origin master && \
docker-compose up --build frontend"
