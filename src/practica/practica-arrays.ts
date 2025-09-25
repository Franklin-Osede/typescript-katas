/**
 * PRACTICE FILE - ARRAYS
 * 
 * Instructions:
 * 1. Copy functions from arrays.ts and debug-arrays.ts
 * 2. Implement solutions
 * 3. Use console.log for debugging
 * 4. Use breakpoints in VS Code
 */

// Import functions from exercises
import { 
  sumArray, 
  findMax, 
  findMin,
  calculateAverage,
  reverseArray, 
  countOccurrences, 
  removeDuplicates,
  rotateArray,
  twoSum,
  bubbleSort,
  binarySearch,
  maxSubarraySum,
  findSecondLargest,
  isSorted,
  findUniqueElements
} from '../ejercicios/arrays';

import {
  sumArrayBuggy,
  findMaxBuggy,
  reverseArrayBuggy,
  countOccurrencesBuggy,
  removeDuplicatesBuggy,
  rotateArrayBuggy,
  twoSumBuggy,
  bubbleSortBuggy
} from '../debugging/debug-arrays';

/**
 * EXERCISE 1: Sum of elements
 */
export function sumArrayPractice(numbers: number[]): number {
  // TODO: Implement here
  console.log('Summing array:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * EXERCISE 2: Find maximum
 */
export function findMaxPractice(numbers: number[]): number {
  // TODO: Implement here
  console.log('Finding maximum in:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * EXERCISE 3: Find minimum
 */
export function findMinPractice(numbers: number[]): number {
  // TODO: Implement here
  console.log('Finding minimum in:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * EXERCISE 4: Calculate average
 */
export function calculateAveragePractice(numbers: number[]): number {
  // TODO: Implement here
  console.log('Calculating average of:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * EXERCISE 5: Reverse array
 */
export function reverseArrayPractice<T>(arr: T[]): T[] {
  // TODO: Implement here
  console.log('Reversing array:', arr);
  
  // Your code here...
  
  return [];
}

/**
 * EXERCISE 6: Count occurrences
 */
export function countOccurrencesPractice<T>(arr: T[], target: T): number {
  // TODO: Implement here
  console.log(`Counting "${target}" in:`, arr);
  
  // Your code here...
  
  return 0;
}

/**
 * EXERCISE 7: Remove duplicates
 */
export function removeDuplicatesPractice<T>(arr: T[]): T[] {
  // TODO: Implement here
  console.log('Removing duplicates from:', arr);
  
  // Your code here...
  
  return [];
}

/**
 * EXERCISE 8: Rotate array
 */
export function rotateArrayPractice<T>(arr: T[], k: number): T[] {
  // TODO: Implement here
  console.log(`Rotating array ${k} positions:`, arr);
  
  // Your code here...
  
  return [];
}

/**
 * EXERCISE 9: Find two numbers that sum to target
 */
export function twoSumPractice(numbers: number[], target: number): [number, number] | null {
  // TODO: Implement here
  console.log(`Finding two numbers that sum to ${target} in:`, numbers);
  
  // Your code here...
  
  return null;
}

/**
 * EXERCISE 10: Sort array (Bubble Sort)
 */
export function bubbleSortPractice(numbers: number[]): number[] {
  // TODO: Implement here
  console.log('Sorting with Bubble Sort:', numbers);
  
  // Your code here...
  
  return [];
}

/**
 * EXERCISE 11: Binary search
 */
export function binarySearchPractice(sortedArray: number[], target: number): number {
  // TODO: Implement here
  console.log(`Searching for ${target} in sorted array:`, sortedArray);
  
  // Your code here...
  
  return -1;
}

/**
 * EXERCISE 12: Maximum subarray sum
 */
export function maxSubarraySumPractice(numbers: number[]): number {
  // TODO: Implement here
  console.log('Finding maximum subarray sum in:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * EXERCISE 13: Find second largest element
 */
export function findSecondLargestPractice(numbers: number[]): number {
  // TODO: Implement here
  console.log('Finding second largest element in:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * EXERCISE 14: Check if array is sorted
 */
export function isSortedPractice(numbers: number[]): boolean {
  // TODO: Implement here
  console.log('Checking if array is sorted:', numbers);
  
  // Your code here...
  
  return false;
}

/**
 * EXERCISE 15: Find unique elements
 */
export function findUniqueElementsPractice<T>(arr: T[]): T[] {
  // TODO: Implement here
  console.log('Finding unique elements in:', arr);
  
  // Your code here...
  
  return [];
}

// ===== DEBUGGING EXERCISES =====

/**
 * DEBUG 1: Sum with bug
 */
export function sumArrayBuggyPractice(numbers: number[]): number {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Sum with bug');
  console.log('Array:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * DEBUG 2: Maximum with bug
 */
export function findMaxBuggyPractice(numbers: number[]): number {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Maximum with bug');
  console.log('Array:', numbers);
  
  // Your code here...
  
  return 0;
}

/**
 * DEBUG 3: Reverse array with bug
 */
export function reverseArrayBuggyPractice<T>(arr: T[]): T[] {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Reverse with bug');
  console.log('Array:', arr);
  
  // Your code here...
  
  return [];
}

/**
 * DEBUG 4: Count occurrences with bug
 */
export function countOccurrencesBuggyPractice<T>(arr: T[], target: T): number {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Count with bug');
  console.log(`Array: ${arr}, Target: ${target}`);
  
  // Your code here...
  
  return 0;
}

/**
 * DEBUG 5: Remove duplicates with bug
 */
export function removeDuplicatesBuggyPractice<T>(arr: T[]): T[] {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Remove duplicates with bug');
  console.log('Array:', arr);
  
  // Your code here...
  
  return [];
}

/**
 * DEBUG 6: Rotate array with bug
 */
export function rotateArrayBuggyPractice<T>(arr: T[], k: number): T[] {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Rotate with bug');
  console.log(`Array: ${arr}, K: ${k}`);
  
  // Your code here...
  
  return [];
}

/**
 * DEBUG 7: Two Sum with bug
 */
export function twoSumBuggyPractice(numbers: number[], target: number): [number, number] | null {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Two Sum with bug');
  console.log(`Array: ${numbers}, Target: ${target}`);
  
  // Your code here...
  
  return null;
}

/**
 * DEBUG 8: Bubble Sort with bug
 */
export function bubbleSortBuggyPractice(numbers: number[]): number[] {
  // TODO: Find the bug and fix it
  console.log('DEBUGGING: Bubble Sort with bug');
  console.log('Array:', numbers);
  
  // Your code here...
  
  return [];
}

// Function to test all exercises
export function testArrays() {
  console.log('=== ARRAYS ===\n');
  
  // Array exercises
  console.log('--- Array Exercises ---');
  
  // Exercise 1
  console.log('1. Sum of elements:');
  console.log('sumArray([1,2,3,4,5]):', sumArrayPractice([1,2,3,4,5]));
  console.log('sumArray([]):', sumArrayPractice([]));
  console.log('');
  
  // Exercise 2
  console.log('2. Find maximum:');
  console.log('findMax([3,7,2,9,1]):', findMaxPractice([3,7,2,9,1]));
  console.log('findMax([5]):', findMaxPractice([5]));
  console.log('');
  
  // Exercise 3
  console.log('3. Find minimum:');
  console.log('findMin([3,7,2,9,1]):', findMinPractice([3,7,2,9,1]));
  console.log('');
  
  // Exercise 4
  console.log('4. Calculate average:');
  console.log('calculateAverage([1,2,3,4,5]):', calculateAveragePractice([1,2,3,4,5]));
  console.log('');
  
  // Exercise 5
  console.log('5. Reverse array:');
  console.log('reverseArray([1,2,3,4,5]):', reverseArrayPractice([1,2,3,4,5]));
  console.log('reverseArray(["a","b","c"]):', reverseArrayPractice(["a","b","c"]));
  console.log('');
  
  // Exercise 6
  console.log('6. Count occurrences:');
  console.log('countOccurrences([1,2,2,3,2,4], 2):', countOccurrencesPractice([1,2,2,3,2,4], 2));
  console.log('countOccurrences(["a","b","a","c"], "a"):', countOccurrencesPractice(["a","b","a","c"], "a"));
  console.log('');
  
  // Exercise 7
  console.log('7. Remove duplicates:');
  console.log('removeDuplicates([1,2,2,3,3,3,4]):', removeDuplicatesPractice([1,2,2,3,3,3,4]));
  console.log('removeDuplicates(["a","b","a","c","b"]):', removeDuplicatesPractice(["a","b","a","c","b"]));
  console.log('');
  
  // Exercise 8
  console.log('8. Rotate array:');
  console.log('rotateArray([1,2,3,4,5], 2):', rotateArrayPractice([1,2,3,4,5], 2));
  console.log('rotateArray([1,2,3,4,5], 7):', rotateArrayPractice([1,2,3,4,5], 7));
  console.log('');
  
  // Exercise 9
  console.log('9. Two Sum:');
  console.log('twoSum([2,7,11,15], 9):', twoSumPractice([2,7,11,15], 9));
  console.log('twoSum([3,2,4], 6):', twoSumPractice([3,2,4], 6));
  console.log('');
  
  // Exercise 10
  console.log('10. Bubble Sort:');
  console.log('bubbleSort([64,34,25,12,22,11,90]):', bubbleSortPractice([64,34,25,12,22,11,90]));
  console.log('bubbleSort([5,2,8,1,9]):', bubbleSortPractice([5,2,8,1,9]));
  console.log('');
  
  // Exercise 11
  console.log('11. Binary search:');
  console.log('binarySearch([1,3,5,7,9,11,13], 7):', binarySearchPractice([1,3,5,7,9,11,13], 7));
  console.log('binarySearch([1,3,5,7,9,11,13], 4):', binarySearchPractice([1,3,5,7,9,11,13], 4));
  console.log('');
  
  // Exercise 12
  console.log('12. Maximum subarray sum:');
  console.log('maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]):', maxSubarraySumPractice([-2,1,-3,4,-1,2,1,-5,4]));
  console.log('maxSubarraySum([1,2,3,4,5]):', maxSubarraySumPractice([1,2,3,4,5]));
  console.log('');
  
  // Exercise 13
  console.log('13. Second largest element:');
  console.log('findSecondLargest([3,7,2,9,1]):', findSecondLargestPractice([3,7,2,9,1]));
  console.log('');
  
  // Exercise 14
  console.log('14. Check if sorted:');
  console.log('isSorted([1,2,3,4,5]):', isSortedPractice([1,2,3,4,5]));
  console.log('isSorted([1,3,2,4,5]):', isSortedPractice([1,3,2,4,5]));
  console.log('');
  
  // Exercise 15
  console.log('15. Unique elements:');
  console.log('findUniqueElements([1,2,2,3,3,3,4]):', findUniqueElementsPractice([1,2,2,3,3,3,4]));
  console.log('');
  
  // Debugging exercises
  console.log('--- Debugging Exercises ---');
  
  // Debug 1
  console.log('DEBUG 1 - Sum with bug:');
  console.log('sumArrayBuggy([1,2,3,4,5]):', sumArrayBuggyPractice([1,2,3,4,5]));
  console.log('sumArrayBuggy([]):', sumArrayBuggyPractice([]));
  console.log('');
  
  // Debug 2
  console.log('DEBUG 2 - Maximum with bug:');
  console.log('findMaxBuggy([3,7,2,9,1]):', findMaxBuggyPractice([3,7,2,9,1]));
  console.log('findMaxBuggy([]):', findMaxBuggyPractice([]));
  console.log('');
  
  // Debug 3
  console.log('DEBUG 3 - Reverse with bug:');
  console.log('reverseArrayBuggy([1,2,3,4,5]):', reverseArrayBuggyPractice([1,2,3,4,5]));
  console.log('');
  
  // Debug 4
  console.log('DEBUG 4 - Count with bug:');
  console.log('countOccurrencesBuggy([1,2,2,3,2,4], 2):', countOccurrencesBuggyPractice([1,2,2,3,2,4], 2));
  console.log('');
  
  // Debug 5
  console.log('DEBUG 5 - Remove duplicates with bug:');
  console.log('removeDuplicatesBuggy([1,2,2,3,3,3,4]):', removeDuplicatesBuggyPractice([1,2,2,3,3,3,4]));
  console.log('');
  
  // Debug 6
  console.log('DEBUG 6 - Rotate with bug:');
  console.log('rotateArrayBuggy([1,2,3,4,5], 2):', rotateArrayBuggyPractice([1,2,3,4,5], 2));
  console.log('');
  
  // Debug 7
  console.log('DEBUG 7 - Two Sum with bug:');
  console.log('twoSumBuggy([2,7,11,15], 9):', twoSumBuggyPractice([2,7,11,15], 9));
  console.log('');
  
  // Debug 8
  console.log('DEBUG 8 - Bubble Sort with bug:');
  console.log('bubbleSortBuggy([64,34,25,12,22,11,90]):', bubbleSortBuggyPractice([64,34,25,12,22,11,90]));
  console.log('');
}