/**
 * CODE SMELL 97: REGEX PROTOTYPE 6
 * 
 * Problem: Incorrect use of regex prototype methods causing unexpected behavior
 * This is common when not understanding regex prototype behavior
 */

export function extendRegex6(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.replaceAll = function(str, replacement) {
    return str.replace(this, replacement);
  };
}

export function modifyRegexPrototype6(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.test = function(str) {
    console.log('Custom test called');
    return false;
  };
}

export function addRegexMethod6(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.count = function(str) {
    const matches = str.match(this);
    return matches ? matches.length : 0;
  };
}

export function overrideRegexMethod6(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.exec = function(str) {
    console.log('Custom exec called');
    return null;
  };
}

export function addRegexProperty6(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.version = '1.0.0';
}

export function modifyRegexConstructor6(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.constructor = function() {
    return /.*/;
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify regex prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various regex patterns
 */

