import { EventManager } from './src/code-smells-tests/group-1-10/smell1-memory-leak';

// Función simple para debuggear
function testListener(data: any) {
  console.log('Listener ejecutado:', data);
}

// Crear instancia
const eventManager = new EventManager();

console.log('=== INICIANDO DEBUG ===');

// Añadir listener
console.log('1. Añadiendo listener...');
eventManager.addEventListener('test', testListener);

// Emitir evento
console.log('2. Emitiendo evento...');
eventManager.emit('test', { message: 'Primer mensaje' });

// Intentar remover listener
console.log('3. Intentando remover listener...');
eventManager.removeEventListener('test', testListener);

// Emitir evento después de "remover"
console.log('4. Emitiendo evento después de "remover"...');
eventManager.emit('test', { message: 'Segundo mensaje' });

console.log('=== FIN DEL DEBUG ===');
