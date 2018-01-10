#! /usr/local/bin/node
var quote = require('./extract-items')
var transformer = require('console-in-transformer')

transformer(quote, '\n')