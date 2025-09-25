/**
 * CODE SMELL 26: INFINITY ERROR
 * 
 * Problem: Operations resulting in Infinity
 * This is a common mathematical error in JavaScript
 */

export function divideByZero(a: number, b: number): number {
  // TODO: Fix Infinity error
  // This will return Infinity if b is 0
  return a / b;
}

export function calculatePercentage(part: number, total: number): number {
  // TODO: Fix Infinity error
  // This will return Infinity if total is 0
  return (part / total) * 100;
}

export function calculateSlope(x1: number, y1: number, x2: number, y2: number): number {
  // TODO: Fix Infinity error
  // This will return Infinity if x2 - x1 is 0
  return (y2 - y1) / (x2 - x1);
}

export function calculateReciprocal(num: number): number {
  // TODO: Fix Infinity error
  // This will return Infinity if num is 0
  return 1 / num;
}

export function calculateTangent(angle: number): number {
  // TODO: Fix Infinity error
  // This will return Infinity for certain angles
  return Math.tan(angle);
}

export function calculateCotangent(angle: number): number {
  // TODO: Fix Infinity error
  // This will return Infinity for certain angles
  return 1 / Math.tan(angle);
}

/**
 * DEBUGGING TASK:
 * 1. Identify Infinity errors
 * 2. Add validation for mathematical operations
 * 3. Handle edge cases
 * 4. Test with zero values
 */

