/**
 * CODE SMELL 96: FUNCTION PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of function prototype methods causing unexpected behavior
 * This is common when not understanding function prototype behavior
 */

export function extendFunction(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.curry = function() {
    const fn = this;
    return function(...args) {
      return fn.apply(this, args);
    };
  };
}

export function modifyFunctionPrototype(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.call = function(thisArg, ...args) {
    console.log('Custom call called');
    return this.apply(thisArg, args);
  };
}

export function addFunctionMethod(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.debounce = function(delay) {
    const fn = this;
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  };
}

export function overrideFunctionMethod(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.bind = function(thisArg, ...args) {
    console.log('Custom bind called');
    return this;
  };
}

export function addFunctionProperty(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.version = '1.0.0';
}

export function modifyFunctionConstructor(): void {
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

