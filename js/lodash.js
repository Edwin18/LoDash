'use strict';

// “Array” Methods

// _.chunk(array, [size=1])
/**
 * Creates an array of elements split into groups the length of size.
 *
 * @param {Array} array - The array to process.
 * @param {number} size - The length of each chunk.
 *
 * @return {Array} - Returns the new array of chunks.
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
 * @param {Array} array - The array to compact.
 *
 * @return {Array} - Returns the new array of filtered values.
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
 * @param {Array} array - The array to concatenate.
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
 * @param {Array} array - The array to query.
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
 * @param {Array} array - The array to query.
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


// _.dropRightWhile
// _.dropWhile


// _.fill(array, value, [start=0], [end=array.length])
/**
 * Fills elements of array with value from start up to, but not including, end.
 * Note: This method mutates array.
 *
 * @param {Array} array - The array to fill.
 * @param {value} value - The value to fill array with.
 * @param {number} start - The start position.
 * @param {number} end - The end position.
 *
 * @return {Array} -  Returns array.
 */
var _fill = function (array, value, start, end) {

  if (start === undefined) {
    start = 0;
  } else {
    start = start;
  }

  if (end === undefined) {
    end = array.length;
  } else {
    end = end;
  }

  for (var i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
};

// var array = [1, 2, 3];
// console.log(_fill(array, 'a'));
// console.log(_fill(Array(3), 2));
// console.log(_fill([4, 6, 8, 10], '*', 1, 3));


// _.findIndex
// _.findLastIndex


// _.head(array)
/**
 * Gets the first element of array.
 *
 * @param {Array} array - The array to query.
 *
 * @return {value} -  Returns the first element of array.
 */
var _head = function (array) {
  return array[0];
};

// console.log(_head([1, 2, 3]));
// console.log(_head([]));


// _.flatten(array)
/**
 * Flattens array a single level deep.
 *
 * @param {Array} array - The array to flatten.
 *
 * @return {Array} -  Returns the new flattened array.
 */
var _flatten = function (array) {
  var flattenedArray = [];

  array.forEach(function (elem) {
    if ((typeof elem) === 'object') {
      Array.prototype.push.apply(flattenedArray, elem);
      // elem.forEach(function (innerElem) {
      //   flattenedArray.push(innerElem);
      // });
    } else {
      flattenedArray.push(elem);
    }
  });

  return flattenedArray;
};

// console.log(_flatten([1, [2, [3, [4]], 5]]));


// _.flattenDeep(array)
/**
 * Recursively flattens array.
 *
 * @param {Array} array - The array to flatten.
 *
 * @return {Array} -  Returns the new flattened array.
 */
var _flattenDeep = function (array) {
  var flattenDeepArray = [];

  var flattenDeep = function (innerArray) {
    innerArray.forEach(function (elem) {
      if ((typeof elem) === 'object') {
        flattenDeep(elem);
      } else {
        flattenDeepArray.push(elem);
      }
    });
  };

  flattenDeep(array);

  return flattenDeepArray;
};

// console.log(_flattenDeep([1, [2, [3, [4]], 5]]));


// _.flattenDepth(array, [depth=1])
/**
 * Recursively flatten array up to depth times.
 *
 * @param {Array} array - The array to flatten.
 * @param {number} depth - The maximum recursion depth.
 *
 * @return {Array} -  Returns the new flattened array.
 */
var _flattenDepth = function (array, depth) {
  var flattenDepthArray = [];

  var flattenDepth = function (innerArray, outerArray) {
    innerArray.forEach(function (elem) {
      if ((typeof elem) === 'object') {
        Array.prototype.push.apply(outerArray, elem);
        // elem.forEach(function (innerElem) {
        //   outerArray.push(innerElem);
        // });
      } else {
        outerArray.push(elem);
      }
    });
  };

  for (var i = 0; i < depth; i++) {
    flattenDepthArray = [];
    flattenDepth(array, flattenDepthArray);
    array = flattenDepthArray;
  }

  return flattenDepthArray;
};

// var array = [1, [2, [3, [4]], 5]];

// console.log(_flattenDepth(array, 1));
// console.log(_flattenDepth(array, 2));
// console.log(_flattenDepth(array, 3));


// _.fromPairs(pairs)
// source npm package

// The inverse of _.toPairs; this method returns an object composed from key-value pairs.

// Since
// 4.0.0

// Arguments
// pairs (Array): The key-value pairs.
// Returns
// (Object): Returns the new object.

// Example
// _.fromPairs([['a', 1], ['b', 2]]);
// // => { 'a': 1, 'b': 2 }
var _fromPairs = function (array) {
  var fromPairsObject = {};

  for (var i = 0; i < array.length; i++) {

  }

  return fromPairsObject;
};

console.log(_fromPairs([['a', 1], ['b', 2]]));
