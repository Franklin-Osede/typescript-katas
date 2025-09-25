/**
 * CODE SMELL 29: HOISTING ISSUES
 * 
 * Problem: Variable hoisting causing unexpected behavior
 * This is a common issue in JavaScript due to hoisting
 */

export function hoistingExample(): void {
  // TODO: Fix hoisting issues
  // This will log undefined instead of throwing error
  console.log(x); // x is hoisted but not initialized
  var x = 5;
}

export function functionHoisting(): void {
  // TODO: Fix hoisting issues
  // This will work due to function hoisting
  console.log(hoistedFunction()); // Function is hoisted
  
  function hoistedFunction() {
    return 'I am hoisted';
  }
}

export function letHoisting(): void {
  // TODO: Fix hoisting issues
  // This will throw ReferenceError due to temporal dead zone
  console.log(y); // y is in temporal dead zone
  let y = 10;
}

export function constHoisting(): void {
  // TODO: Fix hoisting issues
  // This will throw ReferenceError due to temporal dead zone
  console.log(z); // z is in temporal dead zone
  const z = 15;
}

export function varHoisting(): void {
  // TODO: Fix hoisting issues
  // This will log undefined due to var hoisting
  if (true) {
    var blockScoped = 'I am function scoped';
  }
  console.log(blockScoped); // This will work
}

export function functionExpressionHoisting(): void {
  // TODO: Fix hoisting issues
  // This will throw TypeError due to hoisting
  console.log(notHoistedFunction()); // Function is not hoisted
  
  var notHoistedFunction = function() {
    return 'I am not hoisted';
  };
}

/**
 * DEBUGGING TASK:
 * 1. Identify hoisting issues
 * 2. Use let/const instead of var
 * 3. Understand temporal dead zone
 * 4. Test with different declarations
 */

