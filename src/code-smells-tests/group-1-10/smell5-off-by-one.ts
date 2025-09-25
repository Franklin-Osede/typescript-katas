/**
 * CODE SMELL 5: OFF-BY-ONE ERROR
 * 
 * Problem: Array bounds errors
 * This is a common bug in array manipulation
 */

export function findMaxInArray(arr: number[]): number {
  // TODO: Fix off-by-one error
  // This will return undefined if array is empty
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

export function reverseArray<T>(arr: T[]): T[] {
  // TODO: Fix off-by-one error
  // This will miss the middle element if array length is odd
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

export function findLastOccurrence<T>(arr: T[], value: T): number {
  // TODO: Fix off-by-one error
  // This will return -1 if value is not found
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

export function findFirstOccurrence<T>(arr: T[], value: T): number {
  // TODO: Fix off-by-one error
  // This will return -1 if value is not found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

export function findMiddleElement<T>(arr: T[]): T | undefined {
  // TODO: Fix off-by-one error
  // This will return undefined if array is empty
  if (arr.length === 0) return undefined;
  return arr[Math.floor(arr.length / 2)];
}

/**
 * DEBUGGING TASK:
 * 1. Identify off-by-one errors
 * 2. Fix array bounds checking
 * 3. Test with edge cases
 * 4. Handle empty arrays
 */

