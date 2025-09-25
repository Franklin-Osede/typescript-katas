/**
 * CODE SMELL 81: STRING PROTOTYPE 5
 * 
 * Problem: Incorrect use of string prototype methods causing unexpected behavior
 * This is common when not understanding string prototype behavior
 */

export function extendString5(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.padLeft = function(length, char = ' ') {
    return char.repeat(length - this.length) + this;
  };
}

export function modifyStringPrototype5(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.trim = function() {
    console.log('Custom trim called');
    return this;
  };
}

export function addStringMethod5(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.truncate = function(length) {
    return this.length > length ? this.substring(0, length) + '...' : this;
  };
}

export function overrideStringMethod5(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.split = function(separator) {
    console.log('Custom split called');
    return [this];
  };
}

export function addStringProperty5(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.version = '1.0.0';
}

export function modifyStringConstructor5(): void {
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

