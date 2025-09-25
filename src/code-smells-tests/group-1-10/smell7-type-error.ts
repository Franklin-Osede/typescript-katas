/**
 * CODE SMELL 7: TYPE ERROR
 * 
 * Problem: Incorrect type handling
 * This is a common bug in JavaScript
 */

export function addNumbers(a: any, b: any): number {
  // TODO: Fix type error
  // This will concatenate strings instead of adding numbers
  return a + b;
}

export function getArrayLength(arr: any): number {
  // TODO: Fix type error
  // This will return undefined if arr is not an array
  return arr.length;
}

export function processUserData(user: any): string {
  // TODO: Fix type error
  // This will return undefined if user is null
  return user.name + ' - ' + user.email;
}

export function calculateAverage(numbers: any[]): number {
  // TODO: Fix type error
  // This will return NaN if numbers contains non-numeric values
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

export function formatDate(date: any): string {
  // TODO: Fix type error
  // This will return undefined if date is not a Date object
  return date.toISOString();
}

/**
 * DEBUGGING TASK:
 * 1. Identify type errors
 * 2. Add type checking
 * 3. Handle edge cases
 * 4. Test with various inputs
 */

