/**
 * CODE SMELL 11: MUTATION ISSUES
 * 
 * Problem: Mutating objects/arrays when immutability is expected
 * This is common in functional programming and React development
 */

export function updateUser(user: User, updates: Partial<User>): User {
  // TODO: Fix mutation issue
  // This mutates the original user object
  user.name = updates.name || user.name;
  user.email = updates.email || user.email;
  user.age = updates.age || user.age;
  
  return user;
}

export function addToArray(arr: number[], item: number): number[] {
  // TODO: Fix mutation issue
  // This mutates the original array
  arr.push(item);
  return arr;
}

export function removeFromArray(arr: number[], item: number): number[] {
  // TODO: Fix mutation issue
  // This mutates the original array
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export function updateNestedObject(obj: any, path: string[], value: any): any {
  // TODO: Fix mutation issue
  // This mutates the original object
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]];
  }
  current[path[path.length - 1]] = value;
  return obj;
}

export function sortArrayInPlace(arr: number[]): number[] {
  // TODO: Fix mutation issue
  // This mutates the original array
  arr.sort((a, b) => a - b);
  return arr;
}

interface User {
  name: string;
  email: string;
  age: number;
}

/**
 * DEBUGGING TASK:
 * 1. Identify mutation issues
 * 2. Implement immutability
 * 3. Use spread operator or Object.assign
 * 4. Test with nested objects
 */
