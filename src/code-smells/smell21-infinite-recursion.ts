/**
 * CODE SMELL 21: INFINITE RECURSION
 * 
 * Problem: Recursive functions that never reach base case
 * This is a common error in recursive algorithms
 */

export function countDown(n: number): void {
  // TODO: Fix infinite recursion
  // This will recurse infinitely if n is negative
  console.log(n);
  countDown(n - 1);
}

export function findMax(arr: number[], index: number = 0): number {
  // TODO: Fix infinite recursion
  // This will recurse infinitely if index is not properly incremented
  if (index >= arr.length) return -Infinity;
  return Math.max(arr[index], findMax(arr, index));
}

export function binarySearch(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
  // TODO: Fix infinite recursion
  // This will recurse infinitely if left and right are not properly updated
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  
  if (arr[mid] < target) {
    return binarySearch(arr, target, left, right);
  } else {
    return binarySearch(arr, target, left, right);
  }
}

export function mergeSort(arr: number[]): number[] {
  // TODO: Fix infinite recursion
  // This will recurse infinitely if array is not properly split
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  // TODO: Fix infinite recursion
  // This will recurse infinitely if arrays are not properly merged
  if (left.length === 0) return right;
  if (right.length === 0) return left;
  
  if (left[0] <= right[0]) {
    return [left[0], ...merge(left, right)];
  } else {
    return [right[0], ...merge(left, right)];
  }
}

export function quickSort(arr: number[]): number[] {
  // TODO: Fix infinite recursion
  // This will recurse infinitely if pivot is not properly chosen
  if (arr.length <= 1) return arr;
  
  const pivot = arr[0];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * DEBUGGING TASK:
 * 1. Identify infinite recursion
 * 2. Fix base cases
 * 3. Ensure recursive calls progress toward base case
 * 4. Test with various inputs
 */

