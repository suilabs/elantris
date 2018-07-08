#!/usr/bin/env bash

ssh -tt -o StrictHostKeyChecking=no suilabs@suilabs.com <<< "
cd Projects/suilabs
git fetch && \
git pull origin master && \
docker-compose up -d --build frontend"
