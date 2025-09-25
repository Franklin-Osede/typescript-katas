/**
 * CODE SMELL 20: STACK OVERFLOW
 * 
 * Problem: Recursive functions causing stack overflow
 * This is a common issue in JavaScript
 */

export function fibonacci(n: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function factorial(n: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export function sumRecursive(n: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n <= 0) return 0;
  return n + sumRecursive(n - 1);
}

export function powerRecursive(base: number, exponent: number): number {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large exponent
  if (exponent === 0) return 1;
  return base * powerRecursive(base, exponent - 1);
}

export function countdown(n: number): void {
  // TODO: Fix stack overflow
  // This will cause stack overflow for large n
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1);
}

export function treeTraversal(node: any): void {
  // TODO: Fix stack overflow
  // This will cause stack overflow for deep trees
  if (!node) return;
  console.log(node.value);
  treeTraversal(node.left);
  treeTraversal(node.right);
}

/**
 * DEBUGGING TASK:
 * 1. Identify stack overflow issues
 * 2. Implement iterative solutions
 * 3. Add depth limits
 * 4. Test with large inputs
 */

