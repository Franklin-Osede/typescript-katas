/**
 * DATOS DE PRUEBA PARA LOS EJERCICIOS
 * 
 * Arrays y objetos de ejemplo para testing
 */

export const mockArrays = {
  // Arrays de números
  numbers: {
    empty: [],
    single: [5],
    two: [3, 7],
    normal: [1, 2, 3, 4, 5],
    negative: [-5, -3, -1, -2, -4],
    mixed: [-2, 5, -1, 3, 0, 4],
    duplicates: [1, 2, 2, 3, 3, 3, 4],
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    reverseSorted: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    large: Array.from({ length: 1000 }, (_, i) => i + 1),
    random: [64, 34, 25, 12, 22, 11, 90, 5, 77, 30]
  },

  // Arrays de strings
  strings: {
    empty: [],
    single: ['hello'],
    two: ['hi', 'bye'],
    normal: ['apple', 'banana', 'cherry', 'date'],
    duplicates: ['a', 'b', 'a', 'c', 'b', 'd'],
    sorted: ['apple', 'banana', 'cherry', 'date', 'elderberry'],
    reverseSorted: ['elderberry', 'date', 'cherry', 'banana', 'apple'],
    mixed: ['Hello', 'world', '123', 'test', 'ABC']
  },

  // Arrays de objetos
  objects: {
    empty: [],
    single: [{ id: 1, name: 'John', age: 30 }],
    normal: [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Bob', age: 35 }
    ],
    duplicates: [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 1, name: 'John', age: 30 },
      { id: 3, name: 'Bob', age: 35 }
    ]
  }
};

export const mockTargets = {
  numbers: {
    sum: 15,
    max: 10,
    min: 1,
    average: 5.5,
    target: 9,
    search: 7
  },
  strings: {
    search: 'banana',
    count: 'a',
    length: 5
  }
};

export const mockTestCases = {
  // Casos para arrays
  arrayTests: [
    { input: [1, 2, 3, 4, 5], expected: 15, description: 'Array normal' },
    { input: [], expected: 0, description: 'Array vacío' },
    { input: [5], expected: 5, description: 'Array con un elemento' },
    { input: [-1, -2, -3], expected: -6, description: 'Array con negativos' },
    { input: [0, 0, 0], expected: 0, description: 'Array con ceros' }
  ],

  // Casos para strings
  stringTests: [
    { input: 'hello', expected: 5, description: 'String normal' },
    { input: '', expected: 0, description: 'String vacío' },
    { input: 'a', expected: 1, description: 'String de un carácter' },
    { input: 'hello world', expected: 11, description: 'String con espacios' }
  ],

  // Casos para objetos
  objectTests: [
    { input: { name: 'John', age: 30 }, expected: 'John', description: 'Objeto normal' },
    { input: {}, expected: undefined, description: 'Objeto vacío' },
    { input: { id: 1 }, expected: 1, description: 'Objeto con una propiedad' }
  ]
};

export const mockPerformanceTests = {
  // Arrays de diferentes tamaños para testing de performance
  sizes: {
    small: 100,
    medium: 1000,
    large: 10000,
    xlarge: 100000
  },

  // Generadores de arrays para performance
  generators: {
    random: (size: number) => Array.from({ length: size }, () => Math.floor(Math.random() * 1000)),
    sorted: (size: number) => Array.from({ length: size }, (_, i) => i + 1),
    reverse: (size: number) => Array.from({ length: size }, (_, i) => size - i),
    duplicates: (size: number, unique: number = 10) => 
      Array.from({ length: size }, () => Math.floor(Math.random() * unique) + 1)
  }
};

