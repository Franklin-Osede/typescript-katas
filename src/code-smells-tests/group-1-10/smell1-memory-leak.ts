/**
 * CODE SMELL 1: MEMORY LEAK
 * 
 * Problem: Event listeners not being removed
 * This is a common memory leak in JavaScript
 */

export class EventManager {
  private listeners: Map<string, Function[]> = new Map();

  addEventListener(event: string, callback: Function): void {
    // TODO: Fix memory leak
    // This creates a memory leak - listeners are never removed
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  removeEventListener(event: string, callback: Function): void {
    // TODO: Fix memory leak
    // This doesn't actually remove the listener
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      const index = eventListeners.indexOf(callback);
      if (index > -1) {
        eventListeners.splice(index, 1);
      }
    }
  }

  emit(event: string, data: any): void {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach(callback => callback(data));
    }
  }

  // TODO: Add cleanup method
  // This should remove all listeners
  cleanup(): void {
    // Implement cleanup here
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify memory leak
 * 2. Implement proper cleanup
 * 3. Test that listeners are actually removed
 * 4. Add memory usage monitoring
 */