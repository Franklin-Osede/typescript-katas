/**
 * CODE SMELL 19: DIVISION BY ZERO
 * 
 * Problem: Division by zero causing Infinity or NaN
 * This is a common mathematical error in JavaScript
 */

export function divideNumbers(a: number, b: number): number {
  // TODO: Fix division by zero
  // This will return Infinity if b is 0
  return a / b;
}

export function calculatePercentage(part: number, total: number): number {
  // TODO: Fix division by zero
  // This will return Infinity if total is 0
  return (part / total) * 100;
}

export function calculateAverage(numbers: number[]): number {
  // TODO: Fix division by zero
  // This will return NaN if array is empty
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

export function calculateSlope(x1: number, y1: number, x2: number, y2: number): number {
  // TODO: Fix division by zero
  // This will return Infinity if x2 - x1 is 0
  return (y2 - y1) / (x2 - x1);
}

export function calculateReciprocal(num: number): number {
  // TODO: Fix division by zero
  // This will return Infinity if num is 0
  return 1 / num;
}

export function calculateRatio(a: number, b: number): number {
  // TODO: Fix division by zero
  // This will return Infinity if b is 0
  return a / b;
}

/**
 * DEBUGGING TASK:
 * 1. Identify division by zero errors
 * 2. Add validation for mathematical operations
 * 3. Handle edge cases
 * 4. Test with zero values
 */

