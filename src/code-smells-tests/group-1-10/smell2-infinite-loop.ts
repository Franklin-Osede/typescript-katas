/**
 * CODE SMELL 2: INFINITE LOOP
 * 
 * Problem: Binary search with incorrect bounds
 * This is a common infinite loop bug
 */

export function findIndexInSortedArray(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  
  // TODO: Fix infinite loop
  // This will cause infinite loop if target is not found
  while (left < right) { // 🐛 BUG 1: Should be left <= right
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid; // 🐛 BUG 2: This should be mid + 1
    } else {
      right = mid; // 🐛 BUG 3: This should be mid - 1
    }
  }
  
  return -1;
}





/**
 * DEBUGGING TASK:
 * 1. Identify infinite loop
 * 2. Fix bounds checking
 * 3. Test with edge cases
 * 4. Add loop counter to prevent infinite loops
 */