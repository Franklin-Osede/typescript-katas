/**
 * CODE SMELL 52: NUMBER PROTOTYPE 2
 * 
 * Problem: Incorrect use of number prototype methods causing unexpected behavior
 * This is common when not understanding number prototype behavior
 */

export function extendNumber2(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.isPrime = function() {
    const num = this;
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
}

export function modifyNumberPrototype2(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.toFixed = function(digits) {
    console.log('Custom toFixed called');
    return '0';
  };
}

export function addNumberMethod2(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.round = function(decimals) {
    return Math.round(this * Math.pow(10, decimals)) / Math.pow(10, decimals);
  };
}

export function overrideNumberMethod2(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.toPrecision = function(precision) {
    console.log('Custom toPrecision called');
    return '0';
  };
}

export function addNumberProperty2(): void {
  // TODO: Fix number prototype misuse
  // This will affect all numbers globally
  Number.prototype.version = '1.0.0';
}

export function modifyNumberConstructor2(): void {
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

