/**
 * CODE SMELL 58: DATE PROTOTYPE MISUSE
 * 
 * Problem: Incorrect use of date prototype methods causing unexpected behavior
 * This is common when not understanding date prototype behavior
 */

export function extendDate(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.isToday = function() {
    const today = new Date();
    return this.toDateString() === today.toDateString();
  };
}

export function modifyDatePrototype(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.toString = function() {
    console.log('Custom toString called');
    return 'Custom Date';
  };
}

export function addDateMethod(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
    return this;
  };
}

export function overrideDateMethod(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.getTime = function() {
    console.log('Custom getTime called');
    return 0;
  };
}

export function addDateProperty(): void {
  // TODO: Fix date prototype misuse
  // This will affect all dates globally
  Date.prototype.version = '1.0.0';
}

export function modifyDateConstructor(): void {
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

