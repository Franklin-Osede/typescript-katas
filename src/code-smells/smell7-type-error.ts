/**
 * CODE SMELL 7: TYPE ERROR
 * 
 * Problem: Incorrect type handling causing runtime errors
 * This is common in JavaScript/TypeScript when not handling types properly
 */

export function addNumbers(a: any, b: any): number {
  // TODO: Fix type error
  // This will concatenate strings instead of adding numbers
  return a + b;
}

export function getArrayLength(arr: any): number {
  // TODO: Fix type error
  // This will throw if arr is not an array
  return arr.length;
}

export function processUserData(user: any): string {
  // TODO: Fix type error
  // This will throw if user properties don't exist
  return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}

export function calculateAverage(numbers: any[]): number {
  if (numbers.length === 0) return 0;
  
  let sum = 0;
  // TODO: Fix type error
  // This will fail if numbers contains non-numeric values
  for (let num of numbers) {
    sum += num;
  }
  
  return sum / numbers.length;
}

export function formatDate(date: any): string {
  // TODO: Fix type error
  // This will throw if date is not a valid Date object
  return date.toISOString();
}

/**
 * DEBUGGING TASK:
 * 1. Identify all type errors
 * 2. Add proper type checking
 * 3. Handle invalid inputs gracefully
 * 4. Test with various data types
 */

