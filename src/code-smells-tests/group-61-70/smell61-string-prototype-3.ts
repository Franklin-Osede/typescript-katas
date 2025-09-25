/**
 * CODE SMELL 61: STRING PROTOTYPE 3
 * 
 * Problem: Incorrect use of string prototype methods causing unexpected behavior
 * This is common when not understanding string prototype behavior
 */

export function extendString3(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.padLeft = function(length, char = ' ') {
    return char.repeat(length - this.length) + this;
  };
}

export function modifyStringPrototype3(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.trim = function() {
    console.log('Custom trim called');
    return this;
  };
}

export function addStringMethod3(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.truncate = function(length) {
    return this.length > length ? this.substring(0, length) + '...' : this;
  };
}

export function overrideStringMethod3(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.split = function(separator) {
    console.log('Custom split called');
    return [this];
  };
}

export function addStringProperty3(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.version = '1.0.0';
}

export function modifyStringConstructor3(): void {
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

