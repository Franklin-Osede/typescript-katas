/**
 * CODE SMELL 5: OFF-BY-ONE ERROR
 * 
 * Problem: Incorrect loop bounds causing missed elements or out-of-bounds access
 * This is one of the most common bugs in programming
 */

export function findMaxInArray(arr: number[]): number {
  if (arr.length === 0) return -1;
  
  let max = arr[0];
  // TODO: Fix off-by-one error
  // This loop misses the last element
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

export function reverseArray<T>(arr: T[]): T[] {
  const result: T[] = [];
  // TODO: Fix off-by-one error
  // This loop has incorrect bounds
  for (let i = 0; i <= arr.length; i++) {
    result[i] = arr[arr.length - 1 - i];
  }
  return result;
}

export function findLastOccurrence<T>(arr: T[], target: T): number {
  // TODO: Fix off-by-one error
  // This loop starts from wrong index
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

/**
 * DEBUGGING TASK:
 * 1. Identify all off-by-one errors
 * 2. Fix loop bounds
 * 3. Test with edge cases (empty array, single element)
 * 4. Verify correct behavior
 */
