/**
 * CODE SMELL 4: RACE CONDITION
 * 
 * Problem: Shared state accessed concurrently
 * This is a common issue in JavaScript
 */

export class Counter {
  private count: number = 0;

  increment(): void {
    // TODO: Fix race condition
    // This is not atomic - multiple calls can interfere
    this.count++;
  }

  decrement(): void {
    // TODO: Fix race condition
    // This is not atomic - multiple calls can interfere
    this.count--;
  }

  getCount(): number {
    return this.count;
  }

  // TODO: Add synchronization
  // This should be thread-safe
  reset(): void {
    this.count = 0;
  }
}

export class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    // TODO: Fix race condition
    // This is not atomic - multiple deposits can interfere
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    // TODO: Fix race condition
    // This is not atomic - multiple withdrawals can interfere
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify race conditions
 * 2. Implement proper synchronization
 * 3. Test with concurrent operations
 * 4. Ensure thread safety
 */

