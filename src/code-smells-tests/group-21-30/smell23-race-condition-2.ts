/**
 * CODE SMELL 23: RACE CONDITION 2
 * 
 * Problem: Shared state accessed concurrently
 * This is a common issue in JavaScript
 */

export class BankAccount {
  private balance: number = 0;
  private transactions: number[] = [];

  deposit(amount: number): void {
    // TODO: Fix race condition
    // This is not atomic - multiple deposits can interfere
    this.balance += amount;
    this.transactions.push(amount);
  }

  withdraw(amount: number): boolean {
    // TODO: Fix race condition
    // This is not atomic - multiple withdrawals can interfere
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(-amount);
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }

  getTransactions(): number[] {
    return this.transactions;
  }
}

export class Counter {
  private count: number = 0;
  private history: number[] = [];

  increment(): void {
    // TODO: Fix race condition
    // This is not atomic - multiple increments can interfere
    this.count++;
    this.history.push(this.count);
  }

  decrement(): void {
    // TODO: Fix race condition
    // This is not atomic - multiple decrements can interfere
    this.count--;
    this.history.push(this.count);
  }

  getCount(): number {
    return this.count;
  }

  getHistory(): number[] {
    return this.history;
  }
}

export class ShoppingCart {
  private items: any[] = [];
  private total: number = 0;

  addItem(item: any): void {
    // TODO: Fix race condition
    // This is not atomic - multiple additions can interfere
    this.items.push(item);
    this.total += item.price;
  }

  removeItem(index: number): void {
    // TODO: Fix race condition
    // This is not atomic - multiple removals can interfere
    const item = this.items[index];
    this.items.splice(index, 1);
    this.total -= item.price;
  }

  getItems(): any[] {
    return this.items;
  }

  getTotal(): number {
    return this.total;
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify race conditions
 * 2. Implement proper synchronization
 * 3. Test with concurrent operations
 * 4. Ensure thread safety
 */

