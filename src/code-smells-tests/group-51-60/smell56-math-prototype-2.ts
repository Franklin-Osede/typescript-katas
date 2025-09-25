/**
 * CODE SMELL 56: MATH PROTOTYPE 2
 * 
 * Problem: Incorrect use of math prototype methods causing unexpected behavior
 * This is common when not understanding math prototype behavior
 */

export function extendMath2(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.factorial = function(n) {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  };
}

export function modifyMathPrototype2(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.sqrt = function(x) {
    console.log('Custom sqrt called');
    return 0;
  };
}

export function addMathMethod2(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.gcd = function(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  };
}

export function overrideMathMethod2(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.pow = function(x, y) {
    console.log('Custom pow called');
    return 0;
  };
}

export function addMathProperty2(): void {
  // TODO: Fix math prototype misuse
  // This will affect all math globally
  Math.prototype.version = '1.0.0';
}

export function modifyMathConstructor2(): void {
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

