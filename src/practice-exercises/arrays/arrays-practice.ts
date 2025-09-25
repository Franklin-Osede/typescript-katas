/**
 * ARRAYS PRACTICE - START FROM ZERO
 * 
 * Instructions:
 * 1. Implement each function from scratch
 * 2. Use console.log for debugging
 * 3. Think about edge cases
 * 4. Consider time complexity
 */

/**
 * EXERCISE 1: Sum of elements
 * Write a function that sums all elements of a number array
 */
export function sumArray(numbers: number[]): number {
  // TODO: Implement here
  // Hint: Use a for loop
  // console.log('Summing array:', numbers);
  
  return 0; // Change this
}

/**
 * EXERCISE 2: Find maximum
 * Write a function that finds the maximum value in an array
 */
export function findMax(numbers: number[]): number {
  // TODO: Implement here
  // Hint: Initialize with first element
  // console.log('Finding max in:', numbers);
  
  return 0; // Change this
}

/**
 * EXERCISE 3: Find minimum
 * Write a function that finds the minimum value in an array
 */
export function findMin(numbers: number[]): number {
  // TODO: Implement here
  // Hint: Similar to findMax
  // console.log('Finding min in:', numbers);
  
  return 0; // Change this
}

/**
 * EXERCISE 4: Calculate average
 * Write a function that calculates the average of an array
 */
export function calculateAverage(numbers: number[]): number {
  // TODO: Implement here
  // Hint: Sum all elements and divide by length
  // console.log('Calculating average of:', numbers);
  
  return 0; // Change this
}

/**
 * EXERCISE 5: Reverse array
 * Write a function that reverses an array
 */
export function reverseArray<T>(arr: T[]): T[] {
  // TODO: Implement here
  // Hint: Use two pointers or create new array
  // console.log('Reversing array:', arr);
  
  return []; // Change this
}

/**
 * EXERCISE 6: Count occurrences
 * Write a function that counts how many times a value appears in an array
 */
export function countOccurrences<T>(arr: T[], value: T): number {
  // TODO: Implement here
  // Hint: Loop through array and count matches
  // console.log('Counting occurrences of', value, 'in:', arr);
  
  return 0; // Change this
}

/**
 * EXERCISE 7: Remove duplicates
 * Write a function that removes duplicate values from an array
 */
export function removeDuplicates<T>(arr: T[]): T[] {
  // TODO: Implement here
  // Hint: Use a Set or check if already exists
  // console.log('Removing duplicates from:', arr);
  
  return []; // Change this
}

/**
 * EXERCISE 8: Rotate array
 * Write a function that rotates an array by k positions
 */
export function rotateArray<T>(arr: T[], k: number): T[] {
  // TODO: Implement here
  // Hint: Use modulo to handle k > array length
  // console.log('Rotating array by', k, 'positions:', arr);
  
  return []; // Change this
}

/**
 * EXERCISE 9: Two sum
 * Write a function that finds two numbers that add up to a target
 */
export function twoSum(numbers: number[], target: number): number[] {
  // TODO: Implement here
  // Hint: Use nested loops or hash map
  // console.log('Finding two sum for target', target, 'in:', numbers);
  
  return []; // Change this
}

/**
 * EXERCISE 10: Bubble sort
 * Write a function that sorts an array using bubble sort
 */
export function bubbleSort(numbers: number[]): number[] {
  // TODO: Implement here
  // Hint: Compare adjacent elements and swap if needed
  // console.log('Sorting array with bubble sort:', numbers);
  
  return []; // Change this
}

/**
 * EXERCISE 11: Binary search
 * Write a function that searches for a value in a sorted array
 */
export function binarySearch(sortedArray: number[], target: number): number {
  // TODO: Implement here
  // Hint: Use left and right pointers
  // console.log('Binary searching for', target, 'in:', sortedArray);
  
  return -1; // Change this
}

/**
 * EXERCISE 12: Maximum subarray sum
 * Write a function that finds the maximum sum of contiguous subarray
 */
export function maxSubarraySum(numbers: number[]): number {
  // TODO: Implement here
  // Hint: Use Kadane's algorithm
  // console.log('Finding max subarray sum in:', numbers);
  
  return 0; // Change this
}

/**
 * EXERCISE 13: Find second largest
 * Write a function that finds the second largest element in an array
 */
export function findSecondLargest(numbers: number[]): number {
  // TODO: Implement here
  // Hint: Keep track of largest and second largest
  // console.log('Finding second largest in:', numbers);
  
  return 0; // Change this
}

/**
 * EXERCISE 14: Check if sorted
 * Write a function that checks if an array is sorted
 */
export function isSorted(numbers: number[]): boolean {
  // TODO: Implement here
  // Hint: Compare adjacent elements
  // console.log('Checking if array is sorted:', numbers);
  
  return false; // Change this
}

/**
 * EXERCISE 15: Find unique elements
 * Write a function that finds elements that appear only once
 */
export function findUniqueElements<T>(arr: T[]): T[] {
  // TODO: Implement here
  // Hint: Count occurrences and filter
  // console.log('Finding unique elements in:', arr);
  
  return []; // Change this
}

/**
 * MAIN PRACTICE FUNCTION
 * Run all array exercises
 */
export function practiceArrays() {
  console.log('=== ARRAYS PRACTICE ===');
  console.log('Implement each function from scratch');
  console.log('Use console.log for debugging');
  console.log('');

  // Test with sample data
  const testArray = [1, 2, 3, 4, 5];
  const testArray2 = [3, 7, 2, 9, 1, 5, 8];
  const testArray3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

  console.log('--- Testing Array Functions ---');
  
  // Test each function
  console.log('1. Sum of [1,2,3,4,5]:', sumArray(testArray));
  console.log('2. Max of [3,7,2,9,1,5,8]:', findMax(testArray2));
  console.log('3. Min of [3,7,2,9,1,5,8]:', findMin(testArray2));
  console.log('4. Average of [1,2,3,4,5]:', calculateAverage(testArray));
  console.log('5. Reverse of [1,2,3,4,5]:', reverseArray([...testArray]));
  console.log('6. Count 2 in [1,2,2,3,3,3,4,4,4,4]:', countOccurrences(testArray3, 2));
  console.log('7. Remove duplicates from [1,2,2,3,3,3,4,4,4,4]:', removeDuplicates(testArray3));
  console.log('8. Rotate [1,2,3,4,5] by 2:', rotateArray([...testArray], 2));
  console.log('9. Two sum of [2,7,11,15] for target 9:', twoSum([2, 7, 11, 15], 9));
  console.log('10. Bubble sort [3,7,2,9,1,5,8]:', bubbleSort([...testArray2]));
  console.log('11. Binary search for 5 in [1,2,3,4,5,6,7,8,9,10]:', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
  console.log('12. Max subarray sum of [-2,1,-3,4,-1,2,1,-5,4]:', maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log('13. Second largest in [3,7,2,9,1,5,8]:', findSecondLargest(testArray2));
  console.log('14. Is [1,2,3,4,5] sorted:', isSorted(testArray));
  console.log('15. Unique elements in [1,2,2,3,3,3,4,4,4,4]:', findUniqueElements(testArray3));
  
  console.log('');
  console.log('✅ Arrays practice completed!');
  console.log('💡 Implement each function from scratch');
  console.log('🔧 Use console.log for debugging');
}

