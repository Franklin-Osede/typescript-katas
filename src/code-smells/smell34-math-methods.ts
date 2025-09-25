/**
 * CODE SMELL 34: MATH METHODS MISUSE
 * 
 * Problem: Incorrect use of math methods causing unexpected behavior
 * This is common when not understanding math method behavior
 */

export function calculateSquareRoot(num: number): number {
  // TODO: Fix math methods misuse
  // This will return NaN if num is negative
  return Math.sqrt(num);
}

export function calculateLogarithm(num: number): number {
  // TODO: Fix math methods misuse
  // This will return NaN if num is negative or zero
  return Math.log(num);
}

export function calculatePower(base: number, exponent: number): number {
  // TODO: Fix math methods misuse
  // This will return NaN if base is negative and exponent is not an integer
  return Math.pow(base, exponent);
}

export function calculateSine(angle: number): number {
  // TODO: Fix math methods misuse
  // This expects angle in radians, not degrees
  return Math.sin(angle);
}

export function calculateCosine(angle: number): number {
  // TODO: Fix math methods misuse
  // This expects angle in radians, not degrees
  return Math.cos(angle);
}

export function calculateTangent(angle: number): number {
  // TODO: Fix math methods misuse
  // This will return Infinity for certain angles
  return Math.tan(angle);
}

/**
 * DEBUGGING TASK:
 * 1. Identify math methods misuse
 * 2. Use appropriate methods
 * 3. Handle edge cases
 * 4. Test with various inputs
 */

