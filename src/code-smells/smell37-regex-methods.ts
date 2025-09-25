/**
 * CODE SMELL 37: REGEX METHODS MISUSE
 * 
 * Problem: Incorrect use of regex methods causing unexpected behavior
 * This is common when not understanding regex method behavior
 */

export function testRegex(pattern: string, str: string): boolean {
  // TODO: Fix regex methods misuse
  // This will throw if pattern is not valid regex
  return new RegExp(pattern).test(str);
}

export function matchRegex(pattern: string, str: string): RegExpMatchArray | null {
  // TODO: Fix regex methods misuse
  // This will throw if pattern is not valid regex
  return str.match(new RegExp(pattern));
}

export function replaceRegex(pattern: string, str: string, replacement: string): string {
  // TODO: Fix regex methods misuse
  // This will throw if pattern is not valid regex
  return str.replace(new RegExp(pattern), replacement);
}

export function splitRegex(pattern: string, str: string): string[] {
  // TODO: Fix regex methods misuse
  // This will throw if pattern is not valid regex
  return str.split(new RegExp(pattern));
}

export function searchRegex(pattern: string, str: string): number {
  // TODO: Fix regex methods misuse
  // This will throw if pattern is not valid regex
  return str.search(new RegExp(pattern));
}

export function execRegex(pattern: string, str: string): RegExpExecArray | null {
  // TODO: Fix regex methods misuse
  // This will throw if pattern is not valid regex
  const regex = new RegExp(pattern);
  return regex.exec(str);
}

/**
 * DEBUGGING TASK:
 * 1. Identify regex methods misuse
 * 2. Use appropriate methods
 * 3. Handle edge cases
 * 4. Test with various patterns
 */

