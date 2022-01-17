const head   = require('./head');
const tail   = require('./tail');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual   = require('./assertEqual');
const assertObjectsEqual   = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly   = require('./countOnly');
const eqArrays   = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey   = require('./findKey');
const findKeybyValue   = require('./findKeybyValue');
const flatten = require('./flatten');
const letterPositions   = require('./letterPositions');
const map   = require('./map');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const without   = require('./without');


module.exports = {
  head, tail, middle, assertArraysEqual, assertEqual, assertObjectsEqual, countLetters, countOnly, eqArrays, eqObjects, findKey, findKeybyValue, flatten, letterPositions, map, takeUntil, without
};