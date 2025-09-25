/**
 * CODE SMELL 74: DATE PROTOTYPE 4
 * 
 * Problem: Incorrect use of date prototype methods causing unexpected behavior
 * This is common when not understanding date prototype behavior
 */

export function extendDate4(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.isBusinessDay = function() {
    const day = this.getDay();
    return day >= 1 && day <= 5;
  };
}

export function modifyDatePrototype4(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.getMonth = function() {
    console.log('Custom getMonth called');
    return 0;
  };
}

export function addDateMethod4(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.getQuarter = function() {
    return Math.floor(this.getMonth() / 3) + 1;
  };
}

export function overrideDateMethod4(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.toLocaleDateString = function() {
    console.log('Custom toLocaleDateString called');
    return 'Custom Date';
  };
}

export function addDateProperty4(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.version = '1.0.0';
}

export function modifyDateConstructor4(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.constructor = function() {
    return new Date();
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify date prototype misuse
 * 2. Use appropriate methods
 * 3. Avoid global modifications
 * 4. Test with various dates
 */

