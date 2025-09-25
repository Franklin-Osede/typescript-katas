/**
 * CODE SMELL 19: DIVISION BY ZERO
 * 
 * Problem: Dividing by zero causing runtime errors
 * This is a common mathematical error in programming
 */

export function calculateAverage(numbers: number[]): number {
  // TODO: Fix division by zero
  // This will return NaN if array is empty
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

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

export function findRatio(a: number, b: number): number {
  // TODO: Fix division by zero
  // This will return Infinity if b is 0
  return a / b;
}

export function calculateSlope(x1: number, y1: number, x2: number, y2: number): number {
  // TODO: Fix division by zero
  // This will return Infinity if x2 - x1 is 0
  return (y2 - y1) / (x2 - x1);
}

export function normalizeArray(arr: number[]): number[] {
  // TODO: Fix division by zero
  // This will return NaN array if max is 0
  const max = Math.max(...arr);
  return arr.map(num => num / max);
}

/**
 * DEBUGGING TASK:
 * 1. Identify division by zero errors
 * 2. Add zero checks
 * 3. Handle edge cases
 * 4. Test with zero values
 */
