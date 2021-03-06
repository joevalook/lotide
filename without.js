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
  for (let i =0; i < ar1.length; i++) {
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

const without = function(ar1, ar2){
  let c = ar1.length
  let d = ar2.length
  let e = []
  for (let a of ar1){
    e.push(a)
  }
  for (let i = 0; i < c; i++){
    for (let j = 0; j < d; j++){
      if (e[i] === ar2[j]){
        e.splice(i,1);
        i -= 1
      }
    }
  }
  return e
};

module.exports = without;
/*
console.log(without([0,1,2],[1]));
console.log(without([0,1,"2"],[2]));
console.log(without([0,1,1],[3]));
console.log(without([0,1,2,2,3,1],[2,1]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/