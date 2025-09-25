/**
 * CODE SMELL 95: JSON PROTOTYPE 6
 * 
 * Problem: Incorrect use of JSON prototype methods causing unexpected behavior
 * This is common when not understanding JSON prototype behavior
 */

export function extendJSON6(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.flatten = function(obj, prefix = '') {
    const result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          Object.assign(result, this.flatten(obj[key], newKey));
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  };
}

export function modifyJSONPrototype6(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.parse = function(str) {
    console.log('Custom parse called');
    return {};
  };
}

export function addJSONMethod6(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.diff = function(obj1, obj2) {
    const result = {};
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (!obj1.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
          result[key] = obj2[key];
        }
      }
    }
    return result;
  };
}

export function overrideJSONMethod6(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.stringify = function(obj) {
    console.log('Custom stringify called');
    return '{}';
  };
}

export function addJSONProperty6(): void {
  // TODO: Fix JSON prototype misuse
  // This will affect all JSON globally
  JSON.prototype.version = '1.0.0';
}

export function modifyJSONConstructor6(): void {
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

