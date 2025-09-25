/**
 * CODE SMELL 31: ARRAY METHODS MISUSE
 * 
 * Problem: Incorrect use of array methods causing unexpected behavior
 * This is common when not understanding array method behavior
 */

export function filterEvenNumbers(arr: number[]): number[] {
  // TODO: Fix array methods misuse
  // This mutates the original array
  return arr.filter((num, index) => {
    if (num % 2 === 0) {
      arr.splice(index, 1); // This changes array during iteration
    }
    return num % 2 === 0;
  });
}

export function mapAndFilter(arr: number[]): number[] {
  // TODO: Fix array methods misuse
  // This is inefficient - should chain methods
  const mapped = arr.map(x => x * 2);
  const filtered = mapped.filter(x => x > 5);
  return filtered;
}

export function reduceWithSideEffects(arr: number[]): number {
  // TODO: Fix array methods misuse
  // This has side effects in reduce
  let sum = 0;
  return arr.reduce((acc, num) => {
    sum += num; // Side effect
    console.log('Processing:', num); // Side effect
    return acc + num;
  }, 0);
}

export function forEachWithReturn(arr: number[]): number[] {
  // TODO: Fix array methods misuse
  // forEach doesn't return anything
  return arr.forEach(num => num * 2);
}

export function findWithMutation(arr: number[]): number | undefined {
  // TODO: Fix array methods misuse
  // This mutates array during find
  return arr.find((num, index) => {
    if (num > 5) {
      arr[index] = 0; // Mutation during find
    }
    return num > 5;
  });
}

export function sortWithSideEffects(arr: number[]): number[] {
  // TODO: Fix array methods misuse
  // This has side effects in sort
  return arr.sort((a, b) => {
    console.log('Comparing:', a, b); // Side effect
    return a - b;
  });
}

/**
 * DEBUGGING TASK:
 * 1. Identify array methods misuse
 * 2. Use appropriate methods
 * 3. Avoid side effects
 * 4. Test with various arrays
 */
