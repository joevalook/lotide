const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (ar1, ar2) {
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
  if (eqArrays(ar1,ar2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${ar1} !== ${ar2}`);
  }
};

const flatten = function(arr) {
  let a = []
  for (let b of arr) {
    if (Array.isArray(b)) {
      for (let c of b) {
        a.push(c);
      }
    }
    else{
      a.push(b)
    }
  }
  return(a)
};

console.log(flatten([1, 2, [3, 4], 5, [6,7,8],[9,10]]));