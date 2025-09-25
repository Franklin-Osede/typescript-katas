/**
 * CODE SMELL 6: LOGIC ERROR
 * 
 * Problem: Incorrect logical conditions
 * This is a common bug in conditional statements
 */

export function isEvenNumber(num: number): boolean {
  // TODO: Fix logic error
  // This will return true for odd numbers
  return num % 2 !== 0;
}

export function isLeapYear(year: number): boolean {
  // TODO: Fix logic error
  // This will return true for non-leap years
  return year % 4 === 0 && year % 100 !== 0 && year % 400 === 0;
}

export function findMaximum(a: number, b: number, c: number): number {
  // TODO: Fix logic error
  // This will return the minimum instead of maximum
  if (a < b && a < c) return a;
  if (b < a && b < c) return b;
  return c;
}

export function isPalindrome(str: string): boolean {
  // TODO: Fix logic error
  // This will return true for non-palindromes
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < cleaned.length / 2; i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
      return true;
    }
  }
  return false;
}

export function isPrime(num: number): boolean {
  // TODO: Fix logic error
  // This will return true for non-primes
  if (num < 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

/**
 * DEBUGGING TASK:
 * 1. Identify logic errors
 * 2. Fix conditional statements
 * 3. Test with edge cases
 * 4. Verify logic with examples
 */

