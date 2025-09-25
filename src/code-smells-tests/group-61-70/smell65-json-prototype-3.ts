/**
 * CODE SMELL 65: JSON PROTOTYPE 3
 * 
 * Problem: Incorrect use of JSON prototype methods causing unexpected behavior
 * This is common when not understanding JSON prototype behavior
 */

export function extendJSON3(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.prettyStringify = function(obj, indent = 2) {
    return JSON.stringify(obj, null, indent);
  };
}

export function modifyJSONPrototype3(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.parse = function(str) {
    console.log('Custom parse called');
    return {};
  };
}

export function addJSONMethod3(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.merge = function(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  };
}

export function overrideJSONMethod3(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.stringify = function(obj) {
    console.log('Custom stringify called');
    return '{}';
  };
}

export function addJSONProperty3(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.version = '1.0.0';
}

export function modifyJSONConstructor3(): void {
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

