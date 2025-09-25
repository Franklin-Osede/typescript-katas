/**
 * CODE SMELL 36: JSON METHODS MISUSE
 * 
 * Problem: Incorrect use of JSON methods causing unexpected behavior
 * This is common when not understanding JSON method behavior
 */

export function parseJSON(jsonString: string): any {
  // TODO: Fix JSON methods misuse
  // This will throw if jsonString is not valid JSON
  return JSON.parse(jsonString);
}

export function stringifyJSON(obj: any): string {
  // TODO: Fix JSON methods misuse
  // This will lose functions and undefined values
  return JSON.stringify(obj);
}

export function parseJSONWithReviver(jsonString: string): any {
  // TODO: Fix JSON methods misuse
  // This will not handle circular references
  return JSON.parse(jsonString, (key, value) => {
    if (typeof value === 'string' && value.startsWith('date:')) {
      return new Date(value.substring(5));
    }
    return value;
  });
}

export function stringifyJSONWithReplacer(obj: any): string {
  // TODO: Fix JSON methods misuse
  // This will not handle circular references
  return JSON.stringify(obj, (key, value) => {
    if (value instanceof Date) {
      return 'date:' + value.toISOString();
    }
    return value;
  });
}

export function deepClone(obj: any): any {
  // TODO: Fix JSON methods misuse
  // This will lose functions and undefined values
  return JSON.parse(JSON.stringify(obj));
}

export function compareObjects(obj1: any, obj2: any): boolean {
  // TODO: Fix JSON methods misuse
  // This will not handle functions and undefined values
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/**
 * DEBUGGING TASK:
 * 1. Identify JSON methods misuse
 * 2. Use appropriate methods
 * 3. Handle edge cases
 * 4. Test with various objects
 */

