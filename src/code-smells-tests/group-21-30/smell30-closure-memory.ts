/**
 * CODE SMELL 30: CLOSURE MEMORY LEAK
 * 
 * Problem: Closures holding references to large objects
 * This is a common memory leak in JavaScript
 */

export function createCounter(): () => number {
  let count = 0;
  const data = new Array(1000000).fill(0); // Large array
  
  // TODO: Fix closure memory leak
  // This closure holds reference to the large data array
  return function() {
    count++;
    return count;
  };
}

export function createMultipliers(factor: number): number[] {
  const multipliers: (() => number)[] = [];
  const largeData = new Array(1000000).fill(0); // Large array
  
  // TODO: Fix closure memory leak
  // This creates closures with incorrect scope
  for (let i = 0; i < 5; i++) {
    multipliers.push(() => i * factor);
  }
  
  return multipliers.map(fn => fn());
}

export function createEventHandlers(): (() => void)[] {
  const handlers: (() => void)[] = [];
  const largeObject = { data: new Array(1000000).fill(0) }; // Large object
  
  // TODO: Fix closure memory leak
  // This creates closures that hold reference to large object
  for (let i = 0; i < 10; i++) {
    handlers.push(() => {
      console.log('Handler', i, largeObject.data.length);
    });
  }
  
  return handlers;
}

export function createTimers(): NodeJS.Timeout[] {
  const timers: NodeJS.Timeout[] = [];
  const largeData = new Array(1000000).fill(0); // Large array
  
  // TODO: Fix closure memory leak
  // This creates timers that hold reference to large data
  for (let i = 0; i < 5; i++) {
    timers.push(setInterval(() => {
      console.log('Timer', i, largeData.length);
    }, 1000));
  }
  
  return timers;
}

export function createCallbacks(): (() => void)[] {
  const callbacks: (() => void)[] = [];
  const largeArray = new Array(1000000).fill(0); // Large array
  
  // TODO: Fix closure memory leak
  // This creates callbacks that hold reference to large array
  for (let i = 0; i < 10; i++) {
    callbacks.push(() => {
      console.log('Callback', i, largeArray.length);
    });
  }
  
  return callbacks;
}

/**
 * DEBUGGING TASK:
 * 1. Identify closure memory leaks
 * 2. Break circular references
 * 3. Implement proper cleanup
 * 4. Test with large objects
 */

