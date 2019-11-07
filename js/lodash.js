'use strict';

// “Array” Methods

// _.chunk(array, [size=1])
/**
 * Creates an array of elements split into groups the length of size.
 *
 * @param {Object[]} array - The array to process.
 * @param {number} size - The length of each chunk.
 *
 * @return {Object[]} - Returns the new array of chunks.
 */
var _chunk = function (array, size) {
  var newArrLeft = [];
  var newArrRight = [];
  var newArr = [];

  for (var i = 0; i < size; i++) {
    newArrLeft.push(array[i]);
  }

  if (size !== array.length) {
    for (var k = size; k < array.length; k++) {
      newArrRight.push(array[k]);
    }
    newArr.push(newArrRight);
  }

  newArr.push(newArrLeft);

  return newArr;
};


// _.compact(array)
/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param {Object[]} array - The array to compact.
 *
 * @return {Object[]} - Returns the new array of filtered values.
 */
var _compact = function (array) {
  var falseyValue = [false, null, undefined, 0, ''];
  var newArr = [];
  var valueMatch;

  array.map(function (elem) {
    valueMatch = true;
    for (var i = 0; i < falseyValue.length; i++) {
      if (elem === falseyValue[i]) {
        valueMatch = false;
      }
    }

    if (valueMatch) {
      if (!(isNaN(elem))) {
        newArr.push(elem);
      }
    }
  });

  return newArr;
};

// console.log(_compact(['', 1, undefined, 5, false, NaN, null, 10, 0]));


// _.concat(array, [values])
/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 *
 * @param {Object[]} array - The array to concatenate.
 * @param {values} arguments - The values to concatenate.
 *
 * @return {Array} -  Returns the new concatenated array.
 */
var _concat = function (array) {
  for (var i = 1; i < arguments.length; i++) {
    if ((typeof arguments[i]) === 'object') {
      arguments[i].forEach(function (elem) {
        array.push(elem);
      });
    } else {
      array.push(arguments[i]);
    }
  }

  return array;
};

// var arr = [0];
// console.log(_concat(arr, [[1, 2, 3]], 'asd', 4, 5, 6, 'zxc'));


// _.difference
// _.differenceBy
// _.differenceWith


// _.drop(array, [n=1])
/**
 * Creates a slice of array with n elements dropped from the beginning.
 *
 * @param {Object[]} array - The array to query.
 * @param {number} drop - The number of elements to drop.
 *
 * @return {Array} -  Returns the slice of array.
 */
var _drop = function (array, drop) {
  var droppedArray = [];

  if (drop === undefined) {
    drop = 1;
  } else {
    drop = drop;
  }

  for (var i = drop; i < array.length; i++) {
    droppedArray.push(array[i]);
  }

  return droppedArray;
};

// console.log(_drop([1, 2, 3], 5));


// _.dropRight(array, [n=1])
/**
 * Creates a slice of array with n elements dropped from the end.
 *
 * @param {Object[]} array - The array to query.
 * @param {number} drop - The number of elements to drop.
 *
 * @return {Array} -  Returns the slice of array.
 */
var _dropRight = function (array, drop) {
  var droppedArray = [];

  if (drop === undefined) {
    drop = 1;
  } else {
    drop = drop;
  }

  for (var i = 0; i < array.length - drop; i++) {
    droppedArray.push(array[i]);
  }

  return droppedArray;
};

// console.log(_dropRight([1, 2, 3]));
// console.log(_dropRight([1, 2, 3], 2));
// console.log(_dropRight([1, 2, 3], 5));
// console.log(_dropRight([1, 2, 3], 0));
