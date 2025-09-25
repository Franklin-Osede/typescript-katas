/**
 * CODE SMELL 18: ARRAY BOUNDS
 * 
 * Problem: Accessing array elements with invalid indices
 * This is a common runtime error in JavaScript
 */

export function getArrayElement(arr: any[], index: number): any {
  // TODO: Fix array bounds error
  // This will return undefined if index is out of bounds
  return arr[index];
}

export function setArrayElement(arr: any[], index: number, value: any): any[] {
  // TODO: Fix array bounds error
  // This will create sparse array if index is out of bounds
  arr[index] = value;
  return arr;
}

export function getLastElement(arr: any[]): any {
  // TODO: Fix array bounds error
  // This will return undefined if array is empty
  return arr[arr.length - 1];
}

export function getFirstElement(arr: any[]): any {
  // TODO: Fix array bounds error
  // This will return undefined if array is empty
  return arr[0];
}

export function getMiddleElement(arr: any[]): any {
  // TODO: Fix array bounds error
  // This will return undefined if array is empty
  const middleIndex = Math.floor(arr.length / 2);
  return arr[middleIndex];
}

export function getElementRange(arr: any[], start: number, end: number): any[] {
  // TODO: Fix array bounds error
  // This will return undefined if indices are out of bounds
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * DEBUGGING TASK:
 * 1. Identify array bounds errors
 * 2. Add bounds checking
 * 3. Handle edge cases
 * 4. Test with empty arrays and invalid indices
 */

