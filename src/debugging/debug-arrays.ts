/**
 * DEBUGGING EXERCISES - ARRAYS
 * 
 * Instructions:
 * 1. Each function has intentional bugs
 * 2. Find the bug using console.log and breakpoints
 * 3. Fix the bug
 * 4. Explain what was wrong
 */

/**
 * DEBUG 1: Sum with bug
 * This function should sum all elements, but has a bug
 */
export function sumArrayBuggy(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) { // BUG: Should be < not <=
    sum += numbers[i];
  }
  return sum;
}

/**
 * DEBUG 2: Maximum with bug
 * This function should find the maximum, but has a bug
 */
export function findMaxBuggy(numbers: number[]): number {
  let max = numbers[0]; // BUG: What happens if array is empty?
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

/**
 * DEBUG 3: Reverse array with bug
 * This function should reverse the array, but has a bug
 */
export function reverseArrayBuggy<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) { // BUG: Should start from end
    result[i] = arr[arr.length - 1 - i];
  }
  return result;
}

/**
 * DEBUG 4: Count occurrences with bug
 * This function should count occurrences, but has a bug
 */
export function countOccurrencesBuggy<T>(arr: T[], target: T): number {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) { // BUG: Should be < not <=
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

/**
 * DEBUG 5: Remove duplicates with bug
 * This function should remove duplicates, but has a bug
 */
export function removeDuplicatesBuggy<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * DEBUG 6: Rotate array with bug
 * This function should rotate the array, but has a bug
 */
export function rotateArrayBuggy<T>(arr: T[], k: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const newIndex = (i + k) % arr.length; // BUG: Should be (i + k) % arr.length
    result[newIndex] = arr[i];
  }
  return result;
}

/**
 * DEBUG 7: Two Sum with bug
 * This function should find two numbers that sum to target, but has a bug
 */
export function twoSumBuggy(numbers: number[], target: number): [number, number] | null {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) { // BUG: Should be j = i + 1
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

/**
 * DEBUG 8: Bubble Sort with bug
 * This function should sort the array, but has a bug
 */
export function bubbleSortBuggy(numbers: number[]): number[] {
  const result = [...numbers];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

/**
 * Function to test debugging
 * Use this function to test your debugging skills
 */
export function testDebuggingArrays() {
  console.log('=== TESTING ARRAY DEBUGGING ===\n');
  
  // Debug 1
  console.log('DEBUG 1 - Sum with bug:');
  console.log('sumArrayBuggy([1,2,3,4,5]):', sumArrayBuggy([1,2,3,4,5]));
  console.log('sumArrayBuggy([]):', sumArrayBuggy([]));
  console.log('');
  
  // Debug 2
  console.log('DEBUG 2 - Maximum with bug:');
  console.log('findMaxBuggy([3,7,2,9,1]):', findMaxBuggy([3,7,2,9,1]));
  console.log('findMaxBuggy([]):', findMaxBuggy([]));
  console.log('');
  
  // Debug 3
  console.log('DEBUG 3 - Reverse with bug:');
  console.log('reverseArrayBuggy([1,2,3,4,5]):', reverseArrayBuggy([1,2,3,4,5]));
  console.log('');
  
  // Debug 4
  console.log('DEBUG 4 - Count with bug:');
  console.log('countOccurrencesBuggy([1,2,2,3,2,4], 2):', countOccurrencesBuggy([1,2,2,3,2,4], 2));
  console.log('');
  
  // Debug 5
  console.log('DEBUG 5 - Remove duplicates with bug:');
  console.log('removeDuplicatesBuggy([1,2,2,3,3,3,4]):', removeDuplicatesBuggy([1,2,2,3,3,3,4]));
  console.log('');
  
  // Debug 6
  console.log('DEBUG 6 - Rotate with bug:');
  console.log('rotateArrayBuggy([1,2,3,4,5], 2):', rotateArrayBuggy([1,2,3,4,5], 2));
  console.log('');
  
  // Debug 7
  console.log('DEBUG 7 - Two Sum with bug:');
  console.log('twoSumBuggy([2,7,11,15], 9):', twoSumBuggy([2,7,11,15], 9));
  console.log('');
  
  // Debug 8
  console.log('DEBUG 8 - Bubble Sort with bug:');
  console.log('bubbleSortBuggy([64,34,25,12,22,11,90]):', bubbleSortBuggy([64,34,25,12,22,11,90]));
  console.log('');
}