/**
 * CODE SMELL 55: JSON PROTOTYPE 2
 * 
 * Problem: Incorrect use of JSON prototype methods causing unexpected behavior
 * This is common when not understanding JSON prototype behavior
 */

export function extendJSON2(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.safeStringify = function(obj) {
    try {
      return JSON.stringify(obj);
    } catch (e) {
      return '{}';
    }
  };
}

export function modifyJSONPrototype2(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.parse = function(str) {
    console.log('Custom parse called');
    return {};
  };
}

export function addJSONMethod2(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.isValid = function(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };
}

export function overrideJSONMethod2(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.stringify = function(obj) {
    console.log('Custom stringify called');
    return '{}';
  };
}

export function addJSONProperty2(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.version = '1.0.0';
}

export function modifyJSONConstructor2(): void {
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

