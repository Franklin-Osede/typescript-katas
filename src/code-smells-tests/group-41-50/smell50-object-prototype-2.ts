/**
 * CODE SMELL 50: OBJECT PROTOTYPE 2
 * 
 * Problem: Incorrect use of object prototype methods causing unexpected behavior
 * This is common when not understanding object prototype behavior
 */

export function extendObject2(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.deepClone = function() {
    return JSON.parse(JSON.stringify(this));
  };
}

export function modifyObjectPrototype2(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.hasOwnProperty = function(prop) {
    console.log('Custom hasOwnProperty called');
    return Object.prototype.hasOwnProperty.call(this, prop);
  };
}

export function addObjectMethod2(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.merge = function(other) {
    return Object.assign({}, this, other);
  };
}

export function overrideObjectMethod2(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Object';
  };
}

export function addObjectProperty2(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.version = '1.0.0';
}

export function modifyObjectConstructor2(): void {
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

