/**
 * CODE SMELL 59: ARRAY PROTOTYPE 3
 * 
 * Problem: Incorrect use of array prototype methods causing unexpected behavior
 * This is common when not understanding array prototype behavior
 */

export function extendArray3(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.groupBy = function(keyFn) {
    const groups = {};
    for (let item of this) {
      const key = keyFn(item);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
    }
    return groups;
  };
}

export function modifyArrayPrototype3(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.filter = function(callback) {
    console.log('Custom filter called');
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

export function addArrayMethod3(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.flatMap = function(callback) {
    return this.map(callback).flat();
  };
}

export function overrideArrayMethod3(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.reduce = function(callback, initialValue) {
    console.log('Custom reduce called');
    return initialValue;
  };
}

export function addArrayProperty3(): void {
  // TODO: Fix array prototype misuse
  // This will affect all arrays globally
  Array.prototype.version = '1.0.0';
}

export function modifyArrayConstructor3(): void {
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

