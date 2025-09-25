/**
 * CODE SMELL 9: PERFORMANCE ISSUES
 * 
 * Problem: Inefficient algorithms causing poor performance
 * This is common when not considering time/space complexity
 */

export function findDuplicates(arr: number[]): number[] {
  const duplicates: number[] = [];
  
  // TODO: Fix performance issue
  // This is O(n²) - very inefficient for large arrays
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  
  return duplicates;
}

export function fibonacci(n: number): number {
  // TODO: Fix performance issue
  // This is O(2^n) - extremely inefficient
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function searchInArray(arr: number[], target: number): number {
  // TODO: Fix performance issue
  // This is O(n) - should use binary search for sorted arrays
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

export function mergeArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  
  // TODO: Fix performance issue
  // This is inefficient - should use spread operator or concat
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  
  return result;
}

export function sortArray(arr: number[]): number[] {
  // TODO: Fix performance issue
  // This is bubble sort O(n²) - should use built-in sort or better algorithm
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/**
 * DEBUGGING TASK:
 * 1. Identify performance bottlenecks
 * 2. Optimize algorithms
 * 3. Consider time/space complexity
 * 4. Test with large datasets
 */

