/**
 * DÍA 3: EJERCICIOS DE DEBUGGING - OBJETOS
 * 
 * Instrucciones:
 * 1. Cada clase tiene bugs intencionados
 * 2. Encuentra el bug usando console.log y breakpoints
 * 3. Arregla el bug
 * 4. Explica qué estaba mal
 */

/**
 * DEBUG 3.1: Clase Persona con bug
 * Esta clase debería funcionar correctamente, pero tiene bugs
 */
export class PersonaBuggy {
  private nombre: string;
  private edad: number;
  private email: string;

  constructor(nombre: string, edad: number, email: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }

  getInfo(): string {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}`;
  }

  cumpleaños(): void {
    this.edad++; // BUG: ¿Qué está mal aquí?
  }

  getEdad(): number {
    return this.edad;
  }
}

/**
 * DEBUG 3.2: Clase Estudiante con bug
 * Esta clase debería heredar de Persona, pero tiene bugs
 */
export class EstudianteBuggy extends PersonaBuggy {
  private carrera: string;
  private materias: string[];

  constructor(nombre: string, edad: number, email: string, carrera: string) {
    super(nombre, edad, email);
    this.carrera = carrera;
    this.materias = [];
  }

  agregarMateria(materia: string): void {
    this.materias.push(materia);
  }

  getMaterias(): string[] {
    return this.materias;
  }

  getPromedio(): number {
    // BUG: ¿Qué está mal aquí?
    let suma = 0;
    for (let i = 0; i < this.materias.length; i++) {
      suma += this.materias[i];
    }
    return suma / this.materias.length;
  }
}

/**
 * DEBUG 3.3: Clase Banco con bug
 * Esta clase debería manejar cuentas, pero tiene bugs
 */
export class BancoBuggy {
  private nombre: string;
  private cuentas: Map<string, any>;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.cuentas = new Map();
  }

  crearCuenta(numero: string, titular: string, saldoInicial: number): void {
    const cuenta = {
      numero: numero,
      titular: titular,
      saldo: saldoInicial
    };
    this.cuentas.set(numero, cuenta);
  }

  buscarCuenta(numero: string): any {
    return this.cuentas.get(numero);
  }

  getTotalDinero(): number {
    let total = 0;
    this.cuentas.forEach(cuenta => {
      total += cuenta.saldo;
    });
    return total;
  }

  transferir(origen: string, destino: string, monto: number): boolean {
    const cuentaOrigen = this.cuentas.get(origen);
    const cuentaDestino = this.cuentas.get(destino);

    if (!cuentaOrigen || !cuentaDestino) {
      return false;
    }

    if (cuentaOrigen.saldo < monto) {
      return false;
    }

    cuentaOrigen.saldo -= monto;
    cuentaDestino.saldo += monto;

    return true;
  }
}

/**
 * DEBUG 3.4: Clase Pila con bug
 * Esta clase debería implementar una pila, pero tiene bugs
 */
export class PilaBuggy {
  private elementos: any[];

  constructor() {
    this.elementos = [];
  }

  push(elemento: any): void {
    this.elementos.push(elemento);
  }

  pop(): any {
    if (this.isEmpty()) {
      return null;
    }
    return this.elementos.pop();
  }

  peek(): any {
    if (this.isEmpty()) {
      return null;
    }
    return this.elementos[this.elementos.length - 1];
  }

  isEmpty(): boolean {
    return this.elementos.length === 0;
  }

  size(): number {
    return this.elementos.length;
  }
}

/**
 * DEBUG 3.5: Clase Cola con bug
 * Esta clase debería implementar una cola, pero tiene bugs
 */
export class ColaBuggy {
  private elementos: any[];

  constructor() {
    this.elementos = [];
  }

  enqueue(elemento: any): void {
    this.elementos.push(elemento);
  }

  dequeue(): any {
    if (this.isEmpty()) {
      return null;
    }
    return this.elementos.shift();
  }

  front(): any {
    if (this.isEmpty()) {
      return null;
    }
    return this.elementos[0];
  }

  isEmpty(): boolean {
    return this.elementos.length === 0;
  }

  size(): number {
    return this.elementos.length;
  }
}

/**
 * DEBUG 3.6: Clase HashTable con bug
 * Esta clase debería implementar una tabla hash, pero tiene bugs
 */
export class HashTableBuggy {
  private tabla: any[];
  private tamaño: number;

  constructor(tamaño: number = 10) {
    this.tamaño = tamaño;
    this.tabla = new Array(tamaño);
  }

  hash(clave: string): number {
    let hash = 0;
    for (let i = 0; i < clave.length; i++) {
      hash += clave.charCodeAt(i);
    }
    return hash % this.tamaño;
  }

  set(clave: string, valor: any): void {
    const indice = this.hash(clave);
    this.tabla[indice] = { clave, valor };
  }

  get(clave: string): any {
    const indice = this.hash(clave);
    const elemento = this.tabla[indice];
    if (elemento && elemento.clave === clave) {
      return elemento.valor;
    }
    return undefined;
  }

  delete(clave: string): boolean {
    const indice = this.hash(clave);
    if (this.tabla[indice] && this.tabla[indice].clave === clave) {
      this.tabla[indice] = undefined;
      return true;
    }
    return false;
  }
}

/**
 * DEBUG 3.7: Clase ListaEnlazada con bug
 * Esta clase debería implementar una lista enlazada, pero tiene bugs
 */
export class NodoBuggy {
  valor: any;
  siguiente: NodoBuggy | null;

  constructor(valor: any) {
    this.valor = valor;
    this.siguiente = null;
  }
}

export class ListaEnlazadaBuggy {
  private cabeza: NodoBuggy | null;
  private tamaño: number;

  constructor() {
    this.cabeza = null;
    this.tamaño = 0;
  }

  agregar(valor: any): void {
    const nuevoNodo = new NodoBuggy(valor);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
    this.tamaño++;
  }

  eliminar(valor: any): boolean {
    if (!this.cabeza) return false;

    if (this.cabeza.valor === valor) {
      this.cabeza = this.cabeza.siguiente;
      this.tamaño--;
      return true;
    }

    let actual = this.cabeza;
    while (actual.siguiente && actual.siguiente.valor !== valor) {
      actual = actual.siguiente;
    }

    if (actual.siguiente) {
      actual.siguiente = actual.siguiente.siguiente;
      this.tamaño--;
      return true;
    }

    return false;
  }

  buscar(valor: any): boolean {
    let actual = this.cabeza;
    while (actual) {
      if (actual.valor === valor) {
        return true;
      }
      actual = actual.siguiente;
    }
    return false;
  }

  getTamaño(): number {
    return this.tamaño;
  }
}

/**
 * FUNCIÓN PARA PROBAR DEBUGGING
 * Usa esta función para probar tus habilidades de debugging
 */
export function probarDebuggingObjetos() {
  console.log('=== PROBANDO DEBUGGING DE OBJETOS ===\n');
  
  // Debug 3.1
  console.log('DEBUG 3.1 - Persona con bug:');
  const persona = new PersonaBuggy('Juan', 25, 'juan@email.com');
  console.log('Antes del cumpleaños:', persona.getEdad());
  persona.cumpleaños();
  console.log('Después del cumpleaños:', persona.getEdad());
  console.log('');
  
  // Debug 3.2
  console.log('DEBUG 3.2 - Estudiante con bug:');
  const estudiante = new EstudianteBuggy('María', 20, 'maria@email.com', 'Ingeniería');
  estudiante.agregarMateria('Matemáticas');
  estudiante.agregarMateria('Física');
  console.log('Promedio:', estudiante.getPromedio());
  console.log('');
  
  // Debug 3.3
  console.log('DEBUG 3.3 - Banco con bug:');
  const banco = new BancoBuggy('Mi Banco');
  banco.crearCuenta('001', 'Juan', 1000);
  banco.crearCuenta('002', 'María', 500);
  console.log('Total dinero:', banco.getTotalDinero());
  console.log('');
  
  // Debug 3.4
  console.log('DEBUG 3.4 - Pila con bug:');
  const pila = new PilaBuggy();
  pila.push(1);
  pila.push(2);
  pila.push(3);
  console.log('Top:', pila.peek());
  console.log('Pop:', pila.pop());
  console.log('Top después del pop:', pila.peek());
  console.log('');
  
  // Debug 3.5
  console.log('DEBUG 3.5 - Cola con bug:');
  const cola = new ColaBuggy();
  cola.enqueue(1);
  cola.enqueue(2);
  cola.enqueue(3);
  console.log('Front:', cola.front());
  console.log('Dequeue:', cola.dequeue());
  console.log('Front después del dequeue:', cola.front());
  console.log('');
  
  // Debug 3.6
  console.log('DEBUG 3.6 - HashTable con bug:');
  const hashTable = new HashTableBuggy();
  hashTable.set('clave1', 'valor1');
  hashTable.set('clave2', 'valor2');
  console.log('Get clave1:', hashTable.get('clave1'));
  console.log('Get clave2:', hashTable.get('clave2'));
  console.log('');
  
  // Debug 3.7
  console.log('DEBUG 3.7 - ListaEnlazada con bug:');
  const lista = new ListaEnlazadaBuggy();
  lista.agregar(1);
  lista.agregar(2);
  lista.agregar(3);
  console.log('Tamaño:', lista.getTamaño());
  console.log('Buscar 2:', lista.buscar(2));
  console.log('Eliminar 2:', lista.eliminar(2));
  console.log('Tamaño después de eliminar:', lista.getTamaño());
  console.log('');
}

