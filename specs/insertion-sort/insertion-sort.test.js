/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

const { keyBy } = require('lodash');

function insertionSort(nums) {
  // code goes here
  //we consider the zero element sorted
  for (var i = 1; i < nums.length; i++) {
    var key = nums[i]; // keep track of the number because we essentially destroy it or overwrite
    var j = i; // we want to keep consider the entire array, which needs array at its zeroth index

    while (j > 0 && key < nums[j - 1]) {
      nums[j] = nums[j - 1];
      j -= 1;
    }
    nums[j] = key;

    //console.log(nums);
  }
  return nums;
}

// function insertionSort(nums) {
//   for (var i = 1; i < nums.length; i++) {
//     numToInsert = nums[i];
//     var j;

//     for (j = i - 1; j >= 0 && nums[j] > numToInsert; j--) {
//       nums[j + 1] = nums[j];
//     }
//     nums[j + 1] = numToInsert;
//   }
// }

// unit tests
// do not modify the below code
test('insertion sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// def fib(n):  python syntax

// 	memo = {}

// 	if n in memo:
// 		return memo[n]

// 	if n <=0:
// 		return 0
// 	if n==1 or n==2:
// 		return 1

// 	memo[n] = fib(n-1) + fib(n-2)

// 	return memo[n]
// 	#return fib(n-1) + fib(n-2)

// print(fib(8))

function fib(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1 || n == 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
