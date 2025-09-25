/**
 * CODE SMELL 98: FUNCTION PROTOTYPE 7
 * 
 * Problem: Incorrect use of function prototype methods causing unexpected behavior
 * This is common when not understanding function prototype behavior
 */

export function extendFunction7(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.once = function() {
    const fn = this;
    let called = false;
    let result;
    return function(...args) {
      if (!called) {
        called = true;
        result = fn.apply(this, args);
      }
      return result;
    };
  };
}

export function modifyFunctionPrototype7(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.apply = function(thisArg, args) {
    console.log('Custom apply called');
    return this.call(thisArg, ...args);
  };
}

export function addFunctionMethod7(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.retry = function(times) {
    const fn = this;
    return function(...args) {
      let lastError;
      for (let i = 0; i < times; i++) {
        try {
          return fn.apply(this, args);
        } catch (error) {
          lastError = error;
        }
      }
      throw lastError;
    };
  };
}

export function overrideFunctionMethod7(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.bind = function(thisArg, ...args) {
    console.log('Custom bind called');
    return this;
  };
}

export function addFunctionProperty7(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.version = '1.0.0';
}

export function modifyFunctionConstructor7(): void {
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

