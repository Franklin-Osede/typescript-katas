/**
 * CODE SMELL 55: STRING PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of string prototype methods causing unexpected behavior
 * This is common when not understanding string prototype behavior
 */

export function extendString(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  };
}

export function modifyStringPrototype(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.toUpperCase = function() {
    console.log('Custom toUpperCase called');
    return this;
  };
}

export function addStringMethod(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
}

export function overrideStringMethod(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.replace = function(searchValue, replaceValue) {
    console.log('Custom replace called');
    return this;
  };
}

export function addStringProperty(): void {
  // TODO: Fix string prototype misuse
  // This will affect all strings globally
  String.prototype.version = '1.0.0';
}

export function modifyStringConstructor(): void {
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

