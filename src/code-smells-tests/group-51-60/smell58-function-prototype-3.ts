/**
 * CODE SMELL 58: FUNCTION PROTOTYPE 3
 * 
 * Problem: Incorrect use of function prototype methods causing unexpected behavior
 * This is common when not understanding function prototype behavior
 */

export function extendFunction3(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.pipe = function(fn) {
    const original = this;
    return function(...args) {
      return fn(original.apply(this, args));
    };
  };
}

export function modifyFunctionPrototype3(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.call = function(thisArg, ...args) {
    console.log('Custom call called');
    return this.apply(thisArg, args);
  };
}

export function addFunctionMethod3(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.compose = function(fn) {
    const original = this;
    return function(...args) {
      return original(fn.apply(this, args));
    };
  };
}

export function overrideFunctionMethod3(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.bind = function(thisArg, ...args) {
    console.log('Custom bind called');
    return this;
  };
}

export function addFunctionProperty3(): void {
  // TODO: Fix function prototype misuse
  // This will affect all functions globally
  Function.prototype.version = '1.0.0';
}

export function modifyFunctionConstructor3(): void {
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

