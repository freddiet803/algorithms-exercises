/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const { merge } = require('lodash');

const mergeSort = (nums) => {
  // code goes here
  if (nums.length < 2) {
    return nums;
  }

  var ourSlice = Math.round(nums.length / 2);
  var left = nums.slice(0, ourSlice);
  var right = nums.slice(ourSlice);

  return mymerge(mergeSort(left), mergeSort(right));
};

function mymerge(arr1, arr2) {
  var newArray = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      newArray.push(arr1.shift());
    } else {
      newArray.push(arr2.shift());
    }
  }

  return newArray.concat(arr1, arr2);
}

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
