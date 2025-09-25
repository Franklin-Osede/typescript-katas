/**
 * CODE SMELL 16: MEMORY LEAK 2
 * 
 * Problem: Timers not being cleared
 * This is a common memory leak in JavaScript
 */

export class TimerManager {
  private timers: NodeJS.Timeout[] = [];

  startTimer(callback: () => void, delay: number): void {
    // TODO: Fix memory leak
    // This creates timers that are never cleared
    const timer = setTimeout(callback, delay);
    this.timers.push(timer);
  }

  startInterval(callback: () => void, delay: number): void {
    // TODO: Fix memory leak
    // This creates intervals that are never cleared
    const interval = setInterval(callback, delay);
    this.timers.push(interval);
  }

  clearAllTimers(): void {
    // TODO: Fix memory leak
    // This doesn't actually clear the timers
    this.timers = [];
  }

  // TODO: Add proper cleanup method
  cleanup(): void {
    // Implement proper cleanup here
  }
}

export class EventListenerManager {
  private listeners: Map<string, EventListener[]> = new Map();

  addEventListener(element: HTMLElement, event: string, listener: EventListener): void {
    // TODO: Fix memory leak
    // This creates listeners that are never removed
    element.addEventListener(event, listener);
    
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }

  removeEventListener(element: HTMLElement, event: string, listener: EventListener): void {
    // TODO: Fix memory leak
    // This doesn't actually remove the listener
    element.removeEventListener(event, listener);
  }

  // TODO: Add proper cleanup method
  cleanup(): void {
    // Implement proper cleanup here
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify memory leaks
 * 2. Implement proper cleanup
 * 3. Test that resources are freed
 * 4. Monitor memory usage
 */
