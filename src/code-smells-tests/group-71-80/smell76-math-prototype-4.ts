/**
 * CODE SMELL 76: MATH PROTOTYPE 4
 * 
 * Problem: Incorrect use of math prototype methods causing unexpected behavior
 * This is common when not understanding math prototype behavior
 */

export function extendMath4(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.lerp = function(a, b, t) {
    return a + (b - a) * t;
  };
}

export function modifyMathPrototype4(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.abs = function(x) {
    console.log('Custom abs called');
    return 0;
  };
}

export function addMathMethod4(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
  };
}

export function overrideMathMethod4(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.round = function(x) {
    console.log('Custom round called');
    return 0;
  };
}

export function addMathProperty4(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.version = '1.0.0';
}

export function modifyMathConstructor4(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.constructor = function() {
    return {};
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify math prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various math operations
 */

