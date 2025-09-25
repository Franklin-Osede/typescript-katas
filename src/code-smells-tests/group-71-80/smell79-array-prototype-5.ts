/**
 * CODE SMELL 79: ARRAY PROTOTYPE 5
 * 
 * Problem: Incorrect use of array prototype methods causing unexpected behavior
 * This is common when not understanding array prototype behavior
 */

export function extendArray5(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.zip = function(other) {
    const result = [];
    const minLength = Math.min(this.length, other.length);
    for (let i = 0; i < minLength; i++) {
      result.push([this[i], other[i]]);
    }
    return result;
  };
}

export function modifyArrayPrototype5(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.forEach = function(callback) {
    console.log('Custom forEach called');
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

export function addArrayMethod5(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.partition = function(predicate) {
    const pass = [];
    const fail = [];
    for (let item of this) {
      if (predicate(item)) {
        pass.push(item);
      } else {
        fail.push(item);
      }
    }
    return [pass, fail];
  };
}

export function overrideArrayMethod5(): void {
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

export function addArrayProperty5(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.version = '1.0.0';
}

export function modifyArrayConstructor5(): void {
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

