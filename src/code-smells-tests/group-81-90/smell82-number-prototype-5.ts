/**
 * CODE SMELL 82: NUMBER PROTOTYPE 5
 * 
 * Problem: Incorrect use of number prototype methods causing unexpected behavior
 * This is common when not understanding number prototype behavior
 */

export function extendNumber5(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.isInteger = function() {
    return Number.isInteger(this);
  };
}

export function modifyNumberPrototype5(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.toString = function(radix) {
    console.log('Custom toString called');
    return '0';
  };
}

export function addNumberMethod5(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
}

export function overrideNumberMethod5(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.valueOf = function() {
    console.log('Custom valueOf called');
    return 0;
  };
}

export function addNumberProperty5(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.version = '1.0.0';
}

export function modifyNumberConstructor5(): void {
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

