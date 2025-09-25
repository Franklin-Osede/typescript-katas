/**
 * CODE SMELL 17: UNDEFINED BEHAVIOR
 * 
 * Problem: Code that behaves differently in different environments
 * This is a common issue in JavaScript
 */

export function processData(data: any): any {
  // TODO: Fix undefined behavior
  // This behaves differently depending on data type
  if (data.length > 0) {
    return data.map(item => item.value);
  }
  return [];
}

export function calculateAverage(numbers: any[]): number {
  // TODO: Fix undefined behavior
  // This behaves differently with different input types
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

export function formatString(str: any): string {
  // TODO: Fix undefined behavior
  // This behaves differently with different input types
  return str.toUpperCase().trim();
}

export function accessProperty(obj: any, key: string): any {
  // TODO: Fix undefined behavior
  // This behaves differently with different object types
  return obj[key];
}

export function compareValues(a: any, b: any): boolean {
  // TODO: Fix undefined behavior
  // This behaves differently with different value types
  return a == b; // Using == instead of ===
}

export function processArray(arr: any[]): any[] {
  // TODO: Fix undefined behavior
  // This behaves differently with different array contents
  return arr.filter(item => item > 0);
}

/**
 * DEBUGGING TASK:
 * 1. Identify undefined behavior
 * 2. Add type checking
 * 3. Handle edge cases
 * 4. Test with various inputs
 */
