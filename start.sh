#! /bin/bash

# Update the PATH variable with local binary folders
export PATH=$PATH:./node_modules/.bin:./node_modules/casperjs/node_modules/.bin

# Run casperjs
casperjs sample.js
