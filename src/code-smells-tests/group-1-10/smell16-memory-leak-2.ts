/**
 * CODE SMELL 16: MEMORY LEAK - TIMERS
 * 
 * Problem: Timers and intervals not cleared, causing memory leaks
 * This is common in frontend development with setInterval/setTimeout
 */

export class TimerManager {
  private timers: Set<NodeJS.Timeout> = new Set();
  private intervals: Set<NodeJS.Timeout> = new Set();

  startTimer(callback: () => void, delay: number): void {
    // TODO: Fix memory leak
    // Timer is not stored for cleanup
    setTimeout(callback, delay);
  }

  startInterval(callback: () => void, interval: number): void {
    // TODO: Fix memory leak
    // Interval is not stored for cleanup
    setInterval(callback, interval);
  }

  startMultipleTimers(callbacks: (() => void)[], delay: number): void {
    // TODO: Fix memory leak
    // Timers are not stored for cleanup
    callbacks.forEach(callback => {
      setTimeout(callback, delay);
    });
  }

  startConditionalTimer(callback: () => void, delay: number, condition: () => boolean): void {
    // TODO: Fix memory leak
    // Timer is not cleared when condition is met
    const timer = setTimeout(() => {
      if (condition()) {
        callback();
      }
    }, delay);
  }

  // TODO: Add cleanup method
  cleanup(): void {
    // Implement proper cleanup to prevent memory leaks
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify timer memory leaks
 * 2. Store timer references
 * 3. Implement proper cleanup
 * 4. Test with multiple timers
 */
