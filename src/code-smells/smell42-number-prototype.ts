/**
 * CODE SMELL 42: NUMBER PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of number prototype methods causing unexpected behavior
 * This is common when not understanding number prototype behavior
 */

export function extendNumber(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.isEven = function() {
    return this % 2 === 0;
  };
}

export function modifyNumberPrototype(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Number';
  };
}

export function addNumberMethod(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.square = function() {
    return this * this;
  };
}

export function overrideNumberMethod(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.valueOf = function() {
    console.log('Custom valueOf called');
    return 0;
  };
}

export function addNumberProperty(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.version = '1.0.0';
}

export function modifyNumberConstructor(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.constructor = function() {
    return 0;
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify number prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various numbers
 */

