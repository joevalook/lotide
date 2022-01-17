# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thejayvee/lotide`

**Require it:**

`const _ = require('@thejayvee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes 2 arrays and asserts whether the 2 arrays are equal.
* `assertEqual`: takes 2 primitive data types and asserts whether they are equal.
* `assertObjectsEqual`: takes 2 objects and asserts whether the 2 objects are equal
* `countLetters`: takes a string and returns an object with letters as the key and number of occurences as the value. does not count blank spaces.
* `countOnly`: takes an array and an object with boolean values. Returns an object with truthy valued keys and the number of occurences in the array. Does not contain a truthy key with zero occurences in the array.
* `eqArrays`: takes 2 arrays and checks whether the 2 arrays are equal .
* `eqObjects`: takes 2 objects and checks whether the 2 objects are equal .
* `findKey`: takes an object of objects and a function. Returns the first key of the object whose values satisfies the function.
* `findKeyByValue`: takes an object and a value. Returns the first key with the set value. 
* `flatten`: takes a one level nested array and return a non-nested array, with every value "unnested".
* `head`: takes an array and returns the first value of the array.
* `index`: script with all the functions. Require this function in order to use every function.
* `letterPositions`: takes a string and returns an object with letters as the key and index of their position as the value. Blanks spaces are not included as keys.
* `map`: takes an array and a function. Returns an array with the function applied to each of the elements. Does not change the original array.
* `middle`: takes an array, and returns the middle value. If the length of the array is even, will return an array of the two middle values. 
* `tail`: takes an array and returns an array without the first index. Does not change original array
* `takeUntil`: takes an array and a value. Returns an array with the inputted arrays indicies, up until the value. Will not include the value in the array. Does not change the original array.
* `without`: takes an array and a second array. Returns the first array without any of the values of the second array in it. Does not alter either inputted arrays.

