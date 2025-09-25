/**
 * CODE SMELL 10: SCOPE ISSUE
 * 
 * Problem: Variable scope problems causing unexpected behavior
 * This is common in JavaScript due to function scoping and closures
 */

export function createCounter(): () => number {
  let count = 0;
  
  // TODO: Fix scope issue
  // This creates a closure but has scope problems
  return function() {
    count++;
    return count;
  };
}

export function processArray(arr: number[]): number[] {
  const result: number[] = [];
  
  // TODO: Fix scope issue
  // This has variable hoisting and scope problems
  for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
      result.push(arr[i]); // i will be arr.length due to closure
    }, 100);
  }
  
  return result;
}

export function createMultipliers(factor: number): number[] {
  const multipliers: (() => number)[] = [];
  
  // TODO: Fix scope issue
  // This creates closures with incorrect scope
  for (let i = 0; i < 5; i++) {
    multipliers.push(() => i * factor);
  }
  
  return multipliers.map(fn => fn());
}

export class ScopeExample {
  private value: number = 0;
  
  // TODO: Fix scope issue
  // This has incorrect 'this' binding
  getValue(): number {
    return this.value;
  }
  
  // TODO: Fix scope issue
  // This will lose 'this' context when passed as callback
  increment(): void {
    this.value++;
  }
  
  // TODO: Fix scope issue
  // This creates scope problems with arrow functions
  createCallback(): () => void {
    return function() {
      this.value++; // 'this' is undefined here
    };
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify scope issues
 * 2. Fix variable scoping
 * 3. Handle closures correctly
 * 4. Test with different contexts
 */
