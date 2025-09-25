/**
 * CODE SMELL 47: REGEX PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of regex prototype methods causing unexpected behavior
 * This is common when not understanding regex prototype behavior
 */

export function extendRegex(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.matches = function(str) {
    return this.test(str);
  };
}

export function modifyRegexPrototype(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.test = function(str) {
    console.log('Custom test called');
    return false;
  };
}

export function addRegexMethod(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.findAll = function(str) {
    const matches = [];
    let match;
    while ((match = this.exec(str)) !== null) {
      matches.push(match);
    }
    return matches;
  };
}

export function overrideRegexMethod(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.exec = function(str) {
    console.log('Custom exec called');
    return null;
  };
}

export function addRegexProperty(): void {
  // TODO: Fix regex prototype misuse
  // This will affect all regex globally
  RegExp.prototype.version = '1.0.0';
}

export function modifyRegexConstructor(): void {
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

