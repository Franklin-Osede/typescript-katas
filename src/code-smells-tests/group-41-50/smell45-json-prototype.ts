/**
 * CODE SMELL 45: JSON PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of JSON prototype methods causing unexpected behavior
 * This is common when not understanding JSON prototype behavior
 */

export function extendJSON(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.safeParse = function(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  };
}

export function modifyJSONPrototype(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.stringify = function(obj) {
    console.log('Custom stringify called');
    return 'Custom JSON';
  };
}

export function addJSONMethod(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.deepClone = function(obj) {
    return JSON.parse(JSON.stringify(obj));
  };
}

export function overrideJSONMethod(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.parse = function(str) {
    console.log('Custom parse called');
    return {};
  };
}

export function addJSONProperty(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.version = '1.0.0';
}

export function modifyJSONConstructor(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.constructor = function() {
    return {};
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify JSON prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various JSON
 */

