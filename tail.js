
const tail = function(tailarr) {
  if (tailarr.length <= 1) {
    return []
  }
  let k = tailarr.slice(1);
  return k;
};

//console.log(tail([]));
module.exports = tail;