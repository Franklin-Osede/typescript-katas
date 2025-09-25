/**
 * CODE SMELL 91: STRING PROTOTYPE 6
 * 
 * Problem: Incorrect use of string prototype methods causing unexpected behavior
 * This is common when not understanding string prototype behavior
 */

export function extendString6(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.padRight = function(length, char = ' ') {
    return this + char.repeat(length - this.length);
  };
}

export function modifyStringPrototype6(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.replace = function(searchValue, replaceValue) {
    console.log('Custom replace called');
    return this;
  };
}

export function addStringMethod6(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.wrap = function(wrapper) {
    return wrapper + this + wrapper;
  };
}

export function overrideStringMethod6(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.indexOf = function(searchValue, fromIndex) {
    console.log('Custom indexOf called');
    return -1;
  };
}

export function addStringProperty6(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.version = '1.0.0';
}

export function modifyStringConstructor6(): void {
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

