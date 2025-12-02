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

// ===== CÓDIGO DE PRUEBA PARA DEBUGGEAR =====
// Descomenta las siguientes líneas para debuggear

/*
function testListener(data: any) {
  console.log('Listener ejecutado:', data);
}

const eventManager = new EventManager();

console.log('=== INICIANDO DEBUG ===');
console.log('1. Añadiendo listener...');
eventManager.addEventListener('test', testListener);

console.log('2. Emitiendo evento...');
eventManager.emit('test', { message: 'Primer mensaje' });

console.log('3. Intentando remover listener...');
eventManager.removeEventListener('test', testListener);

console.log('4. Emitiendo evento después de "remover"...');
eventManager.emit('test', { message: 'Segundo mensaje' });

console.log('=== FIN DEL DEBUG ===');
*/