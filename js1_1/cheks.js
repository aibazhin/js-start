// Встроенный в НОД модуль для проверок
var assert = require('assert');

var sum = require('/home/alexey/Documents/JS/index.js');

assert.equal(sum(12, 33), 45, '12+33=45');
assert.equal(sum(101, '17'), 118, '101+17=118');

console.info('OK');