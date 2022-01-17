

const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2 || arr.length === 0) {
    return [];
  } else if (arr.length % 2 === 0) {
    let a = [];
    a.push(arr[arr.length / 2 - 1]);
    a.push(arr[arr.length / 2]);
    return a;
  } else {
    let a = [];
    a.push(arr[Math.floor(arr.length / 2)]);
    return a;
  }
};

module.exports = middle;