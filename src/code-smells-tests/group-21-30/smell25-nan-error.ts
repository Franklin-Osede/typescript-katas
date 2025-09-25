/**
 * CODE SMELL 25: NaN ERROR
 * 
 * Problem: Operations resulting in NaN (Not a Number)
 * This is a common mathematical error in JavaScript
 */

export function calculateAverage(numbers: number[]): number {
  // TODO: Fix NaN error
  // This will return NaN if array is empty
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

export function divideNumbers(a: number, b: number): number {
  // TODO: Fix NaN error
  // This will return NaN if either number is NaN
  return a / b;
}

export function parseNumber(str: string): number {
  // TODO: Fix NaN error
  // This will return NaN if string is not a valid number
  return parseFloat(str);
}

export function calculateSquareRoot(num: number): number {
  // TODO: Fix NaN error
  // This will return NaN if num is negative
  return Math.sqrt(num);
}

export function calculateLogarithm(num: number): number {
  // TODO: Fix NaN error
  // This will return NaN if num is negative or zero
  return Math.log(num);
}

export function calculatePower(base: number, exponent: number): number {
  // TODO: Fix NaN error
  // This will return NaN if base is negative and exponent is not an integer
  return Math.pow(base, exponent);
}

/**
 * DEBUGGING TASK:
 * 1. Identify NaN errors
 * 2. Add validation for mathematical operations
 * 3. Handle edge cases
 * 4. Test with invalid inputs
 */

