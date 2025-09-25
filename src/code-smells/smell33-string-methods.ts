/**
 * CODE SMELL 33: STRING METHODS MISUSE
 * 
 * Problem: Incorrect use of string methods causing unexpected behavior
 * This is common when not understanding string method behavior
 */

export function replaceAll(str: string, oldStr: string, newStr: string): string {
  // TODO: Fix string methods misuse
  // This only replaces first occurrence
  return str.replace(oldStr, newStr);
}

export function splitAndJoin(str: string, separator: string): string {
  // TODO: Fix string methods misuse
  // This is inefficient
  const parts = str.split(separator);
  return parts.join(separator);
}

export function toUpperCase(str: string): string {
  // TODO: Fix string methods misuse
  // This mutates the original string
  return str.toUpperCase();
}

export function trimString(str: string): string {
  // TODO: Fix string methods misuse
  // This only trims whitespace from ends
  return str.trim();
}

export function substringString(str: string, start: number, end: number): string {
  // TODO: Fix string methods misuse
  // This will throw if start/end are out of bounds
  return str.substring(start, end);
}

export function indexOfString(str: string, searchStr: string): number {
  // TODO: Fix string methods misuse
  // This will return -1 if not found
  return str.indexOf(searchStr);
}

/**
 * DEBUGGING TASK:
 * 1. Identify string methods misuse
 * 2. Use appropriate methods
 * 3. Handle edge cases
 * 4. Test with various strings
 */

