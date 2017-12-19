#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

filesToCommit () {
  git diff --cached --name-only
}

checkLinting () {
  lintingExecutable=$1
  file=$2
  ${lintingExecutable} ${file}
}

cssFilesToCommit=($(filesToCommit | grep .scss))

echo -n "Checking SCSS Files for linting errors..."
./node_modules/.bin/stylelint ${cssFilesToCommit} > /tmp/csslint 2>/dev/null

if [[ $? -eq 0 ]]; then
  echo -e "${GREEN}✔${NC}"
else
  echo -e "${RED}✘${NC}"
  sed ''/error/s//`printf "\033[31merror\033[0m"`/'' /tmp/csslint
fi


jsFilesToCommit=($(filesToCommit | grep -e .js | grep -v .json ))

echo -n "Checking JS Files for linting errors:"
./node_modules/.bin/eslint ${jsFilesToCommit} > /tmp/jslint 2>/dev/null

if [[ $? -eq 0 ]]; then
  echo -e "${GREEN}✔${NC}"
else
  echo -e "${RED}✘${NC}"
  sed ''/error/s//`printf "\033[31merror\033[0m"`/'' /tmp/jslint
fi
