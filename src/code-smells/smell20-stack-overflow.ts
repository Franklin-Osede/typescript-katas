/**
 * CODE SMELL 20: STACK OVERFLOW
 * 
 * Problem: Infinite recursion causing stack overflow
 * This is a common error in recursive algorithms
 */

export function fibonacci(n: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function factorial(n: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export function power(base: number, exponent: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large exponent
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

export function sumToN(n: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n <= 0) return 0;
  return n + sumToN(n - 1);
}

export function countDigits(n: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n < 10) return 1;
  return 1 + countDigits(Math.floor(n / 10));
}

export function reverseString(str: string): string {
  // TODO: Fix stack overflow
  // This will cause stack overflow for long strings
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

/**
 * DEBUGGING TASK:
 * 1. Identify stack overflow issues
 * 2. Add base cases
 * 3. Use iterative solutions
 * 4. Test with large inputs
 */

