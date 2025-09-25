/**
 * CODE SMELL 48: FUNCTION PROTOTYPE 2
 * 
 * Problem: Incorrect use of function prototype methods causing unexpected behavior
 * This is common when not understanding function prototype behavior
 */

export function extendFunction2(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.memoize = function() {
    const fn = this;
    const cache = new Map();
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn.apply(this, args);
      cache.set(key, result);
      return result;
    };
  };
}

export function modifyFunctionPrototype2(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.apply = function(thisArg, args) {
    console.log('Custom apply called');
    return this.call(thisArg, ...args);
  };
}

export function addFunctionMethod2(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.throttle = function(delay) {
    const fn = this;
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        return fn.apply(this, args);
      }
    };
  };
}

export function overrideFunctionMethod2(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Function';
  };
}

export function addFunctionProperty2(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.version = '1.0.0';
}

export function modifyFunctionConstructor2(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.constructor = function() {
    return function() {};
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify function prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various functions
 */

