/**
 * CODE SMELL 18: ARRAY BOUNDS ERROR
 * 
 * Problem: Accessing array elements outside valid bounds
 * This is a common runtime error in programming
 */

export function getLastElement(arr: number[]): number {
  // TODO: Fix array bounds error
  // This will throw if array is empty
  return arr[arr.length - 1];
}

export function getElementAtIndex(arr: number[], index: number): number {
  // TODO: Fix array bounds error
  // This will throw if index is out of bounds
  return arr[index];
}

export function findElement(arr: number[], target: number): number {
  // TODO: Fix array bounds error
  // This will throw if array is empty
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

export function removeElement(arr: number[], index: number): number[] {
  // TODO: Fix array bounds error
  // This will throw if index is out of bounds
  arr.splice(index, 1);
  return arr;
}

export function getSubArray(arr: number[], start: number, end: number): number[] {
  // TODO: Fix array bounds error
  // This will throw if start/end are out of bounds
  return arr.slice(start, end);
}

export function swapElements(arr: number[], i: number, j: number): number[] {
  // TODO: Fix array bounds error
  // This will throw if indices are out of bounds
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

/**
 * DEBUGGING TASK:
 * 1. Identify array bounds errors
 * 2. Add bounds checking
 * 3. Handle edge cases
 * 4. Test with empty arrays and invalid indices
 */
