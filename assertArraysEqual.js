const eqArrays = require('./eqArrays');


const assertArraysEqual = function(ar1, ar2) {
  const inspect = require('util').inspect;
  if (eqArrays(ar1,ar2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(ar1)} === ${inspect(ar2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(ar1)} !== ${inspect(ar2)}`);
  }
};

module.exports = assertArraysEqual;

