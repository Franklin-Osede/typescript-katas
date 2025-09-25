/**
 * CODE SMELL 54: DATE PROTOTYPE 2
 * 
 * Problem: Incorrect use of date prototype methods causing unexpected behavior
 * This is common when not understanding date prototype behavior
 */

export function extendDate2(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.isWeekend = function() {
    const day = this.getDay();
    return day === 0 || day === 6;
  };
}

export function modifyDatePrototype2(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.getTime = function() {
    console.log('Custom getTime called');
    return 0;
  };
}

export function addDateMethod2(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.format = function(format) {
    const year = this.getFullYear();
    const month = this.getMonth() + 1;
    const day = this.getDate();
    return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
  };
}

export function overrideDateMethod2(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.toISOString = function() {
    console.log('Custom toISOString called');
    return 'Custom Date';
  };
}

export function addDateProperty2(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.version = '1.0.0';
}

export function modifyDateConstructor2(): void {
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

