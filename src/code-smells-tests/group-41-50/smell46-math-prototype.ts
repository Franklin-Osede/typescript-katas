/**
 * CODE SMELL 46: MATH PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of math prototype methods causing unexpected behavior
 * This is common when not understanding math prototype behavior
 */

export function extendMath(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.square = function(x) {
    return x * x;
  };
}

export function modifyMathPrototype(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.sqrt = function(x) {
    console.log('Custom sqrt called');
    return 0;
  };
}

export function addMathMethod(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.cube = function(x) {
    return x * x * x;
  };
}

export function overrideMathMethod(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.pow = function(x, y) {
    console.log('Custom pow called');
    return 0;
  };
}

export function addMathProperty(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.version = '1.0.0';
}

export function modifyMathConstructor(): void {
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

