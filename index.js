#!/usr/bin/env node

const cenarius = require("./dist/main.js").default;
const pkg = require("./package.json");
const config = require("./cenarius.json");

Object.assign(config, { version: pkg.version });
cenarius(config);
