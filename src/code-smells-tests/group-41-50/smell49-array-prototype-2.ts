/**
 * CODE SMELL 49: ARRAY PROTOTYPE 2
 * 
 * Problem: Incorrect use of array prototype methods causing unexpected behavior
 * This is common when not understanding array prototype behavior
 */

export function extendArray2(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.chunk = function(size) {
    const chunks = [];
    for (let i = 0; i < this.length; i += size) {
      chunks.push(this.slice(i, i + size));
    }
    return chunks;
  };
}

export function modifyArrayPrototype2(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.forEach = function(callback) {
    console.log('Custom forEach called');
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

export function addArrayMethod2(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.unique = function() {
    return [...new Set(this)];
  };
}

export function overrideArrayMethod2(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.map = function(callback) {
    console.log('Custom map called');
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

export function addArrayProperty2(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.version = '1.0.0';
}

export function modifyArrayConstructor2(): void {
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

