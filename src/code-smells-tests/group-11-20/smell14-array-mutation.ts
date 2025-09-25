/**
 * CODE SMELL 14: ARRAY MUTATION
 * 
 * Problem: Mutating arrays when you shouldn't
 * This is a common bug in JavaScript
 */

export function addItemToArray(arr: any[], item: any): any[] {
  // TODO: Fix array mutation
  // This mutates the original array
  arr.push(item);
  return arr;
}

export function removeItemFromArray(arr: any[], index: number): any[] {
  // TODO: Fix array mutation
  // This mutates the original array
  arr.splice(index, 1);
  return arr;
}

export function sortArrayInPlace(arr: number[]): number[] {
  // TODO: Fix array mutation
  // This mutates the original array
  return arr.sort((a, b) => a - b);
}

export function reverseArrayInPlace(arr: any[]): any[] {
  // TODO: Fix array mutation
  // This mutates the original array
  return arr.reverse();
}

export function filterArrayInPlace(arr: any[], predicate: (item: any) => boolean): any[] {
  // TODO: Fix array mutation
  // This mutates the original array
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!predicate(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

export function updateArrayItem(arr: any[], index: number, newValue: any): any[] {
  // TODO: Fix array mutation
  // This mutates the original array
  arr[index] = newValue;
  return arr;
}

/**
 * DEBUGGING TASK:
 * 1. Identify array mutation issues
 * 2. Create copies instead of mutating
 * 3. Test that original array is preserved
 * 4. Use immutable operations
 */

