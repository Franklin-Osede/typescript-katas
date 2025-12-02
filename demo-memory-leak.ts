import { EventManager } from './src/code-smells-tests/group-1-10/smell1-memory-leak';

// Crear instancia
const eventManager = new EventManager();

console.log('=== DEMOSTRACIÓN DEL MEMORY LEAK ===');

// Añadir función anónima
console.log('1. Añadiendo función anónima...');
eventManager.addEventListener('test', () => console.log('Función 1'));

// Emitir evento
console.log('2. Emitiendo evento...');
eventManager.emit('test', { message: 'Primer mensaje' });

// Intentar remover función anónima DIFERENTE
console.log('3. Intentando remover función anónima DIFERENTE...');
eventManager.removeEventListener('test', () => console.log('Función 1'));

// Emitir evento después de "remover"
console.log('4. Emitiendo evento después de "remover"...');
eventManager.emit('test', { message: 'Segundo mensaje' });

console.log('=== FIN DE LA DEMOSTRACIÓN ===');
