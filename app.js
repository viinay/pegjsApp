var peg = require('pegjs')
var grammar = require('./grammer').abab;
var parser = peg.generate(grammar);
var results = parser.parse('abaa')
console.log(results)