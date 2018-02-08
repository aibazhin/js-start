// Встроенный в НОД модуль для проверок
var assert = require('assert');

var isValidTime = require('/home/alexey/Documents/JS/js1_2/index.js');

assert.equal(isValidTime(12, 30), true, 'Valid time');
assert.equal(isValidTime(12, 61), false, 'Not valid time');

console.info('OK');