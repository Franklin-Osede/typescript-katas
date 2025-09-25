/**
 * CODE SMELL 14: ARRAY MUTATION
 * 
 * Problem: Mutating arrays when functional approach is expected
 * This is common in functional programming and React state management
 */

export function filterEvenNumbers(arr: number[]): number[] {
  // TODO: Fix array mutation
  // This mutates the original array
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

export function removeDuplicates(arr: number[]): number[] {
  // TODO: Fix array mutation
  // This mutates the original array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--; // Adjust index after removal
      }
    }
  }
  return arr;
}

export function sortArray(arr: number[]): number[] {
  // TODO: Fix array mutation
  // This mutates the original array
  arr.sort((a, b) => a - b);
  return arr;
}

export function reverseArray(arr: any[]): any[] {
  // TODO: Fix array mutation
  // This mutates the original array
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

export function addToArray(arr: number[], item: number): number[] {
  // TODO: Fix array mutation
  // This mutates the original array
  arr.push(item);
  return arr;
}

export function removeFromArray(arr: number[], item: number): number[] {
  // TODO: Fix array mutation
  // This mutates the original array
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

/**
 * DEBUGGING TASK:
 * 1. Identify array mutations
 * 2. Use functional methods (map, filter, reduce)
 * 3. Create new arrays instead of mutating
 * 4. Test immutability
 */
