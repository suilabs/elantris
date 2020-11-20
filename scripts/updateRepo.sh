#!/usr/bin/env bash

source ./config.sh

LC_PROJECT_NAME=${PROJECT_NAME}
LC_COMMAND=${COMMAND}

ssh -tt -o StrictHostKeyChecking=no "${USER}@${HOST}" <<< "mkdir -p Projects/${LC_PROJECT_NAME}; exit" && \
rsync -rpulz --verbose "${PWD}/../*" "${USER}@${HOST}:./Projects/${LC_PROJECT_NAME}/." && \
ssh -tt -o SendEnv=PROJECT_NAME -o StrictHostKeyChecking=no "${USER}@${HOST}" <<< "
cd Projects/${LC_PROJECT_NAME}
${LC_COMMAND}
exit"
