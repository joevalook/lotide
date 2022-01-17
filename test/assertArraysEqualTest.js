const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([0,1,2],[0,1,2]);
assertArraysEqual([0,1,"2"],[0,1,2]);
assertArraysEqual([0,1,1],[0,1,2]);
assertArraysEqual([0,1,2,2,3,1],[0,1,2,3,2,1]);