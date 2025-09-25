/**
 * CODE SMELL 38: ARRAY PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of array prototype methods causing unexpected behavior
 * This is common when not understanding array prototype behavior
 */

export function extendArray(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
}

export function modifyArrayPrototype(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.push = function(item) {
    console.log('Pushing:', item);
    return this.length;
  };
}

export function addArrayMethod(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.sum = function() {
    return this.reduce((acc, num) => acc + num, 0);
  };
}

export function overrideArrayMethod(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.map = function(callback) {
    console.log('Custom map called');
    return this;
  };
}

export function addArrayProperty(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.version = '1.0.0';
}

export function modifyArrayConstructor(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.constructor = function() {
    return [];
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify array prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various arrays
 */

