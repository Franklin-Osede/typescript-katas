/**
 * CODE SMELL 60: OBJECT PROTOTYPE 3
 * 
 * Problem: Incorrect use of object prototype methods causing unexpected behavior
 * This is common when not understanding object prototype behavior
 */

export function extendObject3(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.pick = function(keys) {
    const result = {};
    for (let key of keys) {
      if (this.hasOwnProperty(key)) {
        result[key] = this[key];
      }
    }
    return result;
  };
}

export function modifyObjectPrototype3(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.hasOwnProperty = function(prop) {
    console.log('Custom hasOwnProperty called');
    return Object.prototype.hasOwnProperty.call(this, prop);
  };
}

export function addObjectMethod3(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.omit = function(keys) {
    const result = {};
    for (let key in this) {
      if (this.hasOwnProperty(key) && !keys.includes(key)) {
        result[key] = this[key];
      }
    }
    return result;
  };
}

export function overrideObjectMethod3(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Object';
  };
}

export function addObjectProperty3(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.version = '1.0.0';
}

export function modifyObjectConstructor3(): void {
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

