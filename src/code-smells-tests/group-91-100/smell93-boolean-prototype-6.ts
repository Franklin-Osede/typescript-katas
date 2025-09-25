/**
 * CODE SMELL 93: BOOLEAN PROTOTYPE 6
 * 
 * Problem: Incorrect use of boolean prototype methods causing unexpected behavior
 * This is common when not understanding boolean prototype behavior
 */

export function extendBoolean6(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.nor = function(other) {
    return !(this || other);
  };
}

export function modifyBooleanPrototype6(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Boolean';
  };
}

export function addBooleanMethod6(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.implies = function(other) {
    return !this || other;
  };
}

export function overrideBooleanMethod6(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.valueOf = function() {
    console.log('Custom valueOf called');
    return false;
  };
}

export function addBooleanProperty6(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.version = '1.0.0';
}

export function modifyBooleanConstructor6(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.constructor = function() {
    return false;
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify boolean prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various booleans
 */

