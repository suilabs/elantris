#!/usr/bin/env bash
docker build -t suiweb . && \
docker run -d -p 0.0.0.0:5000:5000 suiweb
