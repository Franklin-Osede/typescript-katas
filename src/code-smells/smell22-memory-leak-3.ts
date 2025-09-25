/**
 * CODE SMELL 22: MEMORY LEAK - CLOSURES
 * 
 * Problem: Closures holding references to large objects
 * This is a common memory leak in JavaScript
 */

export class DataProcessor {
  private data: any[] = [];
  private listeners: (() => void)[] = [];

  addData(item: any): void {
    this.data.push(item);
    // TODO: Fix memory leak
    // This creates a closure that holds reference to the entire data array
    this.listeners.forEach(listener => {
      listener();
    });
  }

  createProcessor(): (item: any) => void {
    // TODO: Fix memory leak
    // This closure holds reference to the entire class instance
    return (item: any) => {
      this.data.push(item);
      this.processData();
    };
  }

  private processData(): void {
    // TODO: Fix memory leak
    // This method holds reference to all data
    this.data.forEach(item => {
      console.log('Processing:', item);
    });
  }

  // TODO: Add cleanup method
  cleanup(): void {
    // Implement proper cleanup to prevent memory leaks
  }
}

export function createCounter(): () => number {
  let count = 0;
  const data = new Array(1000000).fill(0); // Large array
  
  // TODO: Fix memory leak
  // This closure holds reference to the large data array
  return function() {
    count++;
    return count;
  };
}

export class EventEmitter {
  private events: Map<string, Function[]> = new Map();
  private data: any[] = [];

  on(event: string, callback: Function): void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
  }

  emit(event: string, data: any): void {
    // TODO: Fix memory leak
    // This creates closures that hold reference to data
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => {
        callback(data);
      });
    }
  }

  // TODO: Add cleanup method
  cleanup(): void {
    // Implement proper cleanup to prevent memory leaks
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify closure memory leaks
 * 2. Break circular references
 * 3. Implement proper cleanup
 * 4. Test with large objects
 */

