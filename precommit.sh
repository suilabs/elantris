#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

filesToCommit () {
  git diff --diff-filter=d --cached --name-only
}

checkLinting () {
  lintingExecutable=$1
  file=$2
  ${lintingExecutable} ${file}
}

main () {
  cssFilesToCommit=($(filesToCommit | grep .scss))

  cssLen=${#cssFilesToCommit[@]}
  if [[ $cssLen -eq 0 ]]; then
    echo -n "No SCSS files to check -> ";
  else
    echo -n "Checking $cssLen SCSS Files for linting errors..."
    ./node_modules/.bin/stylelint ${cssFilesToCommit[@]} > /tmp/csslint 2>/dev/null
  fi

  if [[ $? -eq 0 ]]; then
    echo -e "${GREEN}✔${NC}"
  else
    echo -e "${RED}✘${NC}"
    sed ''/error/s//`printf "\033[31merror\033[0m"`/'' /tmp/csslint

    return -1
  fi


  jsFilesToCommit=($(filesToCommit | grep -e .js | grep -v .json ))

  jsLen=${#jsFilesToCommit[@]}

  if [[ $jsLen -eq 0 ]]; then
    echo -n "No JS files to check -> "; else
    echo -n "Checking $jsLen JS Files for linting errors..."
    ./node_modules/.bin/eslint ${jsFilesToCommit[@]} > /tmp/jslint 2>/tmp/jslintError
  fi

  if [[ $? -eq 0 ]]; then
    echo -e "${GREEN}✔${NC}"
  else
    echo -e "${RED}✘${NC}"
    sed ''/error/s//`printf "\033[31merror\033[0m"`/'' /tmp/jslint
    return -1
  fi
}

main
