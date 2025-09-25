/**
 * CODE SMELL 24: STRING INDEX ERROR
 * 
 * Problem: Accessing string characters with invalid indices
 * This is a common runtime error in string manipulation
 */

export function getLastCharacter(str: string): string {
  // TODO: Fix string index error
  // This will return undefined if string is empty
  return str[str.length - 1];
}

export function getCharacterAt(str: string, index: number): string {
  // TODO: Fix string index error
  // This will return undefined if index is out of bounds
  return str[index];
}

export function reverseString(str: string): string {
  // TODO: Fix string index error
  // This will throw if string is empty
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

export function getSubstring(str: string, start: number, end: number): string {
  // TODO: Fix string index error
  // This will throw if start/end are out of bounds
  return str.substring(start, end);
}

export function findCharacter(str: string, char: string): number {
  // TODO: Fix string index error
  // This will throw if char is not found
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

export function replaceCharacter(str: string, index: number, newChar: string): string {
  // TODO: Fix string index error
  // This will throw if index is out of bounds
  return str.substring(0, index) + newChar + str.substring(index + 1);
}

/**
 * DEBUGGING TASK:
 * 1. Identify string index errors
 * 2. Add bounds checking
 * 3. Handle edge cases
 * 4. Test with empty strings and invalid indices
 */

