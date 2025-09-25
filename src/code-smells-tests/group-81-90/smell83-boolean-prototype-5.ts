/**
 * CODE SMELL 83: BOOLEAN PROTOTYPE 5
 * 
 * Problem: Incorrect use of boolean prototype methods causing unexpected behavior
 * This is common when not understanding boolean prototype behavior
 */

export function extendBoolean5(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.xor = function(other) {
    return this !== other;
  };
}

export function modifyBooleanPrototype5(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Boolean';
  };
}

export function addBooleanMethod5(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.nand = function(other) {
    return !(this && other);
  };
}

export function overrideBooleanMethod5(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.valueOf = function() {
    console.log('Custom valueOf called');
    return false;
  };
}

export function addBooleanProperty5(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.version = '1.0.0';
}

export function modifyBooleanConstructor5(): void {
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

