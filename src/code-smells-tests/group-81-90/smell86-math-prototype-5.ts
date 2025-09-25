/**
 * CODE SMELL 86: MATH PROTOTYPE 5
 * 
 * Problem: Incorrect use of math prototype methods causing unexpected behavior
 * This is common when not understanding math prototype behavior
 */

export function extendMath5(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.lerp = function(a, b, t) {
    return a + (b - a) * t;
  };
}

export function modifyMathPrototype5(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.abs = function(x) {
    console.log('Custom abs called');
    return 0;
  };
}

export function addMathMethod5(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
  };
}

export function overrideMathMethod5(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.round = function(x) {
    console.log('Custom round called');
    return 0;
  };
}

export function addMathProperty5(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.version = '1.0.0';
}

export function modifyMathConstructor5(): void {
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

