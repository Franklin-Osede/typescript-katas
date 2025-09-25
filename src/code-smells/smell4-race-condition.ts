/**
 * CODE SMELL 4: RACE CONDITION
 * 
 * Problem: Multiple async operations modifying shared state
 * This is a common concurrency issue in JavaScript
 */

export class Counter {
  private count: number = 0;

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

  getCount(): number {
    return this.count;
  }

  // TODO: Add proper synchronization
  async reset(): Promise<void> {
    this.count = 0;
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify the race condition
 * 2. Implement proper synchronization
 * 3. Test with concurrent operations
 * 4. Ensure thread safety
 */

