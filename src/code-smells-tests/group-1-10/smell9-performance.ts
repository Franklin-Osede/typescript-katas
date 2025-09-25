/**
 * CODE SMELL 9: PERFORMANCE ISSUES
 * 
 * Problem: Inefficient algorithms
 * This is a common performance issue in JavaScript
 */

export function findDuplicates(arr: number[]): number[] {
  // TODO: Fix performance issues
  // This is O(n²) - should be O(n)
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

export function fibonacci(n: number): number {
  // TODO: Fix performance issues
  // This is O(2^n) - should be O(n)
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function searchInArray(arr: number[], target: number): number {
  // TODO: Fix performance issues
  // This is O(n) - should be O(log n) for sorted arrays
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

export function mergeArrays(arr1: number[], arr2: number[]): number[] {
  // TODO: Fix performance issues
  // This is O(n²) - should be O(n)
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

export function sortArray(arr: number[]): number[] {
  // TODO: Fix performance issues
  // This is O(n²) - should be O(n log n)
  const result = [...arr];
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
 * DEBUGGING TASK:
 * 1. Identify performance issues
 * 2. Optimize algorithms
 * 3. Test with large datasets
 * 4. Measure performance improvements
 */

