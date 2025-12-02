import { EventManager } from './src/code-smells-tests/group-1-10/smell1-memory-leak';

// Función para simular un listener
function createListener(name: string) {
  return function(data: any) {
    console.log(`Listener ${name} recibió:`, data);
  };
}

// Función para monitorear el tamaño del Map
function monitorMemory(eventManager: EventManager) {
  // Accedemos al Map privado usando reflection (solo para debugging)
  const listeners = (eventManager as any).listeners;
  console.log('📊 Estado del Map:');
  for (const [event, callbacks] of listeners.entries()) {
    console.log(`  Evento "${event}": ${callbacks.length} listeners`);
  }
}

async function debugMemoryLeak() {
  console.log('🔍 Iniciando debug del memory leak...\n');
  
  const eventManager = new EventManager();
  
  // Crear varios listeners
  const listener1 = createListener('Listener-1');
  const listener2 = createListener('Listener-2');
  const listener3 = createListener('Listener-3');
  
  console.log('1️⃣ Añadiendo listeners...');
  eventManager.addEventListener('test', listener1);
  eventManager.addEventListener('test', listener2);
  eventManager.addEventListener('test', listener3);
  
  monitorMemory(eventManager);
  
  console.log('\n2️⃣ Emitiendo evento...');
  eventManager.emit('test', { message: 'Hola mundo' });
  
  console.log('\n3️⃣ Intentando remover listener2...');
  eventManager.removeEventListener('test', listener2);
  
  monitorMemory(eventManager);
  
  console.log('\n4️⃣ Emitiendo evento después de "remover"...');
  eventManager.emit('test', { message: 'Segundo mensaje' });
  
  console.log('\n5️⃣ Intentando remover listener1 (misma función)...');
  const listener1Copy = createListener('Listener-1'); // Nueva función con mismo nombre
  eventManager.removeEventListener('test', listener1Copy);
  
  monitorMemory(eventManager);
  
  console.log('\n6️⃣ Emitiendo evento final...');
  eventManager.emit('test', { message: 'Mensaje final' });
}

// Ejecutar el debug
debugMemoryLeak().catch(console.error);
