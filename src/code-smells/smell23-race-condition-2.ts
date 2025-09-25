/**
 * CODE SMELL 23: RACE CONDITION - ASYNC OPERATIONS
 * 
 * Problem: Multiple async operations modifying shared state
 * This is a common concurrency issue in JavaScript
 */

export class AsyncCounter {
  private count: number = 0;
  private operations: Promise<void>[] = [];

  async increment(): Promise<void> {
    // TODO: Fix race condition
    // Multiple calls can read the same value before incrementing
    const current = this.count;
    await new Promise(resolve => setTimeout(resolve, 10)); // Simulate async operation
    this.count = current + 1;
  }

  async decrement(): Promise<void> {
    // TODO: Fix race condition
    const current = this.count;
    await new Promise(resolve => setTimeout(resolve, 10)); // Simulate async operation
    this.count = current - 1;
  }

  async processMultipleOperations(operations: number): Promise<void> {
    // TODO: Fix race condition
    // This creates multiple concurrent operations
    for (let i = 0; i < operations; i++) {
      this.increment();
    }
  }

  async batchIncrement(count: number): Promise<void> {
    // TODO: Fix race condition
    // This creates multiple concurrent operations
    const promises = [];
    for (let i = 0; i < count; i++) {
      promises.push(this.increment());
    }
    await Promise.all(promises);
  }

  getCount(): number {
    return this.count;
  }

  // TODO: Add proper synchronization
  async reset(): Promise<void> {
    this.count = 0;
  }
}

export class AsyncDataManager {
  private data: Map<string, any> = new Map();
  private loading: Set<string> = new Set();

  async loadData(key: string): Promise<any> {
    // TODO: Fix race condition
    // Multiple calls can start loading the same data
    if (this.data.has(key)) {
      return this.data.get(key);
    }

    if (this.loading.has(key)) {
      // Wait for other operation to complete
      while (this.loading.has(key)) {
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      return this.data.get(key);
    }

    this.loading.add(key);
    const data = await this.fetchData(key);
    this.data.set(key, data);
    this.loading.delete(key);
    return data;
  }

  private async fetchData(key: string): Promise<any> {
    // Simulate async data fetching
    await new Promise(resolve => setTimeout(resolve, 100));
    return { key, value: Math.random() };
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify race conditions
 * 2. Implement proper synchronization
 * 3. Use locks or semaphores
 * 4. Test with concurrent operations
 */

