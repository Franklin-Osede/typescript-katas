/**
 * CODE SMELL 28: TYPE COERCION
 * 
 * Problem: Implicit type conversions causing unexpected behavior
 * This is a common issue in JavaScript due to its dynamic typing
 */

export function addValues(a: any, b: any): any {
  // TODO: Fix type coercion
  // This will concatenate strings instead of adding numbers
  return a + b;
}

export function compareValues(a: any, b: any): boolean {
  // TODO: Fix type coercion
  // This will perform type coercion with ==
  return a == b;
}

export function checkTruthy(value: any): boolean {
  // TODO: Fix type coercion
  // This will perform truthy/falsy conversion
  return value;
}

export function convertToNumber(str: any): number {
  // TODO: Fix type coercion
  // This will perform implicit conversion
  return +str;
}

export function convertToString(num: any): string {
  // TODO: Fix type coercion
  // This will perform implicit conversion
  return num + '';
}

export function checkArray(arr: any): boolean {
  // TODO: Fix type coercion
  // This will perform type coercion
  return arr == [];
}

/**
 * DEBUGGING TASK:
 * 1. Identify type coercion issues
 * 2. Use explicit type conversion
 * 3. Use strict equality (===)
 * 4. Test with various data types
 */

