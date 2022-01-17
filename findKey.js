const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, func) {
  let keys = Object.keys(obj);
  for (let a of keys) {
    if (func(obj[a])) {
      return a;
    }
  }
};

module.exports = findKey;

/*
let assertCase = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3, toys: 4},
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.toys === 4); // => "elBulli"

assertEqual(assertCase, "elBulli");
*/
