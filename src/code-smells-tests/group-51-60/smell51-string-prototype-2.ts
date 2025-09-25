/**
 * CODE SMELL 51: STRING PROTOTYPE 2
 * 
 * Problem: Incorrect use of string prototype methods causing unexpected behavior
 * This is common when not understanding string prototype behavior
 */

export function extendString2(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.camelCase = function() {
    return this.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  };
}

export function modifyStringPrototype2(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.toLowerCase = function() {
    console.log('Custom toLowerCase called');
    return this;
  };
}

export function addStringMethod2(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.slugify = function() {
    return this.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };
}

export function overrideStringMethod2(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.indexOf = function(searchValue, fromIndex) {
    console.log('Custom indexOf called');
    return -1;
  };
}

export function addStringProperty2(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.version = '1.0.0';
}

export function modifyStringConstructor2(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.constructor = function() {
    return '';
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify string prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various strings
 */

