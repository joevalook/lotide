const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(word) {
  const results = {};

  for (const item of word) {
    if (results[item]) {
      results[item] += 1;
    } else if (item !== " ") {
      results[item] = 1;
    }
    
  }
  console.log(results)
  return results;
}
countLetters("lighthouse in the house");