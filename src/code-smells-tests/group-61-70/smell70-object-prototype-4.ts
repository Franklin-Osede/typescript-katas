/**
 * CODE SMELL 70: OBJECT PROTOTYPE 4
 * 
 * Problem: Incorrect use of object prototype methods causing unexpected behavior
 * This is common when not understanding object prototype behavior
 */

export function extendObject4(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.mapValues = function(fn) {
    const result = {};
    for (let key in this) {
      if (this.hasOwnProperty(key)) {
        result[key] = fn(this[key], key);
      }
    }
    return result;
  };
}

export function modifyObjectPrototype4(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.hasOwnProperty = function(prop) {
    console.log('Custom hasOwnProperty called');
    return Object.prototype.hasOwnProperty.call(this, prop);
  };
}

export function addObjectMethod4(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.filter = function(predicate) {
    const result = {};
    for (let key in this) {
      if (this.hasOwnProperty(key) && predicate(this[key], key)) {
        result[key] = this[key];
      }
    }
    return result;
  };
}

export function overrideObjectMethod4(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Object';
  };
}

export function addObjectProperty4(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.version = '1.0.0';
}

export function modifyObjectConstructor4(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.constructor = function() {
    return {};
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify object prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various objects
 */

