#!/usr/bin/env node

const app = require('../index.js');
const args = process.argv.splice(2)
app.generate(args)