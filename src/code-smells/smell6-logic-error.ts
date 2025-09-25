/**
 * CODE SMELL 6: LOGIC ERROR
 * 
 * Problem: Incorrect logical conditions causing wrong behavior
 * This is a common issue in conditional statements
 */

export function isEvenNumber(num: number): boolean {
  // TODO: Fix logic error
  // This returns true for odd numbers
  return num % 2 === 1;
}

export function isLeapYear(year: number): boolean {
  // TODO: Fix logic error
  // This has incorrect leap year logic
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

export function findMaximum(a: number, b: number, c: number): number {
  // TODO: Fix logic error
  // This doesn't handle all cases correctly
  if (a > b) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  // TODO: Fix logic error
  // This condition is incorrect
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return true; // Should return false
    }
    left++;
    right--;
  }
  
  return false; // Should return true
}

/**
 * DEBUGGING TASK:
 * 1. Identify all logic errors
 * 2. Fix conditional statements
 * 3. Test with various inputs
 * 4. Verify correct behavior
 */

