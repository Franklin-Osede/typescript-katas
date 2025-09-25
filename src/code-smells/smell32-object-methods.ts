/**
 * CODE SMELL 32: OBJECT METHODS MISUSE
 * 
 * Problem: Incorrect use of object methods causing unexpected behavior
 * This is common when not understanding object method behavior
 */

export function getObjectKeys(obj: any): string[] {
  // TODO: Fix object methods misuse
  // This will include inherited properties
  return Object.keys(obj);
}

export function getObjectValues(obj: any): any[] {
  // TODO: Fix object methods misuse
  // This will include inherited properties
  return Object.values(obj);
}

export function getObjectEntries(obj: any): [string, any][] {
  // TODO: Fix object methods misuse
  // This will include inherited properties
  return Object.entries(obj);
}

export function hasOwnProperty(obj: any, key: string): boolean {
  // TODO: Fix object methods misuse
  // This will throw if obj is null/undefined
  return obj.hasOwnProperty(key);
}

export function assignObjects(obj1: any, obj2: any): any {
  // TODO: Fix object methods misuse
  // This mutates the first object
  return Object.assign(obj1, obj2);
}

export function freezeObject(obj: any): any {
  // TODO: Fix object methods misuse
  // This mutates the original object
  Object.freeze(obj);
  return obj;
}

/**
 * DEBUGGING TASK:
 * 1. Identify object methods misuse
 * 2. Use appropriate methods
 * 3. Avoid mutations
 * 4. Test with various objects
 */

