/**
 * CODE SMELL 84: DATE PROTOTYPE 5
 * 
 * Problem: Incorrect use of date prototype methods causing unexpected behavior
 * This is common when not understanding date prototype behavior
 */

export function extendDate5(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.isLeapYear = function() {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };
}

export function modifyDatePrototype5(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.getFullYear = function() {
    console.log('Custom getFullYear called');
    return 2000;
  };
}

export function addDateMethod5(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.getAge = function() {
    const today = new Date();
    return today.getFullYear() - this.getFullYear();
  };
}

export function overrideDateMethod5(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.toDateString = function() {
    console.log('Custom toDateString called');
    return 'Custom Date';
  };
}

export function addDateProperty5(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.version = '1.0.0';
}

export function modifyDateConstructor5(): void {
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

