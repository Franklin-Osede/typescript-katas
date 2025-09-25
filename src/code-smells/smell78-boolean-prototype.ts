/**
 * CODE SMELL 78: BOOLEAN PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of boolean prototype methods causing unexpected behavior
 * This is common when not understanding boolean prototype behavior
 */

export function extendBoolean(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.toggle = function() {
    return !this;
  };
}

export function modifyBooleanPrototype(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Boolean';
  };
}

export function addBooleanMethod(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.and = function(other) {
    return this && other;
  };
}

export function overrideBooleanMethod(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.valueOf = function() {
    console.log('Custom valueOf called');
    return false;
  };
}

export function addBooleanProperty(): void {
  // TODO: Fix boolean prototype misuse
  // This will affect all booleans globally
  Boolean.prototype.version = '1.0.0';
}

export function modifyBooleanConstructor(): void {
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

