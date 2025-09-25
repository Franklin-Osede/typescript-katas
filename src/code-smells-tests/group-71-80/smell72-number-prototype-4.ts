/**
 * CODE SMELL 72: NUMBER PROTOTYPE 4
 * 
 * Problem: Incorrect use of number prototype methods causing unexpected behavior
 * This is common when not understanding number prototype behavior
 */

export function extendNumber4(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.isPositive = function() {
    return this > 0;
  };
}

export function modifyNumberPrototype4(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.toFixed = function(digits) {
    console.log('Custom toFixed called');
    return '0';
  };
}

export function addNumberMethod4(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.lerp = function(target, t) {
    return this + (target - this) * t;
  };
}

export function overrideNumberMethod4(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.toPrecision = function(precision) {
    console.log('Custom toPrecision called');
    return '0';
  };
}

export function addNumberProperty4(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.version = '1.0.0';
}

export function modifyNumberConstructor4(): void {
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

