const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(ar1, ar2) {
  const inspect = require('util').inspect;
  if (eqArrays(ar1,ar2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(ar1)} === ${inspect(ar2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(ar1)} !== ${inspect(ar2)}`);
  }
};



const map = function(arr, func) {
  const results = [];
  for (let item of arr) {
    results.push(func(item));
  }
  return results;
};

module.exports = map;

/*
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
*/