/**
 * CODE SMELL 88: OBJECT PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of object prototype methods causing unexpected behavior
 * This is common when not understanding object prototype behavior
 */

export function extendObject(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.isEmpty = function() {
    return Object.keys(this).length === 0;
  };
}

export function modifyObjectPrototype(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.toString = function() {
    return 'Custom Object';
  };
}

export function addObjectMethod(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this));
  };
}

export function overrideObjectMethod(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.hasOwnProperty = function(prop) {
    console.log('Custom hasOwnProperty called');
    return false;
  };
}

export function addObjectProperty(): void {
  // TODO: Fix object prototype misuse
  // This will affect all objects globally
  Object.prototype.version = '1.0.0';
}

export function modifyObjectConstructor(): void {
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

