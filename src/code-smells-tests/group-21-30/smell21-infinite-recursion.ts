/**
 * CODE SMELL 21: INFINITE RECURSION
 * 
 * Problem: Recursive functions without proper base cases
 * This is a common issue in JavaScript
 */

export function infiniteRecursion(n: number): number {
  // TODO: Fix infinite recursion
  // This will cause infinite recursion
  return infiniteRecursion(n - 1);
}

export function badFibonacci(n: number): number {
  // TODO: Fix infinite recursion
  // This will cause infinite recursion for negative numbers
  if (n === 0) return 0;
  if (n === 1) return 1;
  return badFibonacci(n - 1) + badFibonacci(n - 2);
}

export function badFactorial(n: number): number {
  // TODO: Fix infinite recursion
  // This will cause infinite recursion for negative numbers
  if (n === 0) return 1;
  return n * badFactorial(n - 1);
}

export function badSum(n: number): number {
  // TODO: Fix infinite recursion
  // This will cause infinite recursion for negative numbers
  if (n === 0) return 0;
  return n + badSum(n - 1);
}

export function badPower(base: number, exponent: number): number {
  // TODO: Fix infinite recursion
  // This will cause infinite recursion for negative exponents
  if (exponent === 0) return 1;
  return base * badPower(base, exponent - 1);
}

export function badCountdown(n: number): void {
  // TODO: Fix infinite recursion
  // This will cause infinite recursion for negative numbers
  console.log(n);
  badCountdown(n - 1);
}

/**
 * DEBUGGING TASK:
 * 1. Identify infinite recursion
 * 2. Add proper base cases
 * 3. Handle edge cases
 * 4. Test with various inputs
 */

