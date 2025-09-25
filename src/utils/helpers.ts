/**
 * FUNCIONES AUXILIARES Y HELPERS
 * 
 * Utilidades para los ejercicios
 */

/**
 * Genera un array de números aleatorios
 */
export function generateRandomArray(size: number, min: number = 0, max: number = 100): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

/**
 * Genera un array ordenado
 */
export function generateSortedArray(size: number, start: number = 1): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(start + i);
  }
  return arr;
}

/**
 * Genera un array con duplicados
 */
export function generateArrayWithDuplicates(size: number, uniqueValues: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * uniqueValues) + 1);
  }
  return arr;
}

/**
 * Mide el tiempo de ejecución de una función
 */
export function measureTime<T>(fn: () => T, label: string = 'Function'): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${label} took ${(end - start).toFixed(2)} milliseconds`);
  return result;
}

/**
 * Compara dos arrays
 */
export function arraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

/**
 * Imprime un array de forma bonita
 */
export function printArray<T>(arr: T[], label: string = 'Array'): void {
  console.log(`${label}: [${arr.join(', ')}]`);
}

/**
 * Crea un array de strings aleatorios
 */
export function generateRandomStrings(size: number, length: number = 5): string[] {
  const strings: string[] = [];
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0; i < size; i++) {
    let str = '';
    for (let j = 0; j < length; j++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    strings.push(str);
  }
  
  return strings;
}

/**
 * Crea un objeto con propiedades aleatorias
 */
export function generateRandomObject(): { id: number; name: string; value: number } {
  return {
    id: Math.floor(Math.random() * 1000),
    name: `Item_${Math.floor(Math.random() * 100)}`,
    value: Math.floor(Math.random() * 100)
  };
}

/**
 * Crea un array de objetos aleatorios
 */
export function generateRandomObjects(size: number): Array<{ id: number; name: string; value: number }> {
  const objects: Array<{ id: number; name: string; value: number }> = [];
  for (let i = 0; i < size; i++) {
    objects.push(generateRandomObject());
  }
  return objects;
}

/**
 * Valida que un array esté ordenado
 */
export function isArraySorted<T>(arr: T[], compareFn?: (a: T, b: T) => number): boolean {
  if (arr.length <= 1) return true;
  
  for (let i = 1; i < arr.length; i++) {
    if (compareFn) {
      if (compareFn(arr[i - 1], arr[i]) > 0) return false;
    } else {
      if (arr[i - 1] > arr[i]) return false;
    }
  }
  
  return true;
}

/**
 * Crea un array con valores específicos para testing
 */
export function createTestArray(): {
  empty: number[];
  single: number[];
  two: number[];
  normal: number[];
  negative: number[];
  mixed: number[];
  duplicates: number[];
  sorted: number[];
  reverseSorted: number[];
} {
  return {
    empty: [],
    single: [5],
    two: [3, 7],
    normal: [1, 2, 3, 4, 5],
    negative: [-5, -3, -1, -2, -4],
    mixed: [-2, 5, -1, 3, 0, 4],
    duplicates: [1, 2, 2, 3, 3, 3, 4],
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    reverseSorted: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  };
}

