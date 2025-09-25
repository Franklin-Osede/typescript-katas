/**
 * CODE SMELL 15: OBJECT MUTATION
 * 
 * Problem: Mutating objects when immutability is expected
 * This is common in React state management and functional programming
 */

export function updateUser(user: User, updates: Partial<User>): User {
  // TODO: Fix object mutation
  // This mutates the original user object
  user.name = updates.name || user.name;
  user.email = updates.email || user.email;
  user.age = updates.age || user.age;
  user.address = updates.address || user.address;
  
  return user;
}

export function addProperty(obj: any, key: string, value: any): any {
  // TODO: Fix object mutation
  // This mutates the original object
  obj[key] = value;
  return obj;
}

export function removeProperty(obj: any, key: string): any {
  // TODO: Fix object mutation
  // This mutates the original object
  delete obj[key];
  return obj;
}

export function updateNestedProperty(obj: any, path: string[], value: any): any {
  // TODO: Fix object mutation
  // This mutates the original object
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]];
  }
  current[path[path.length - 1]] = value;
  return obj;
}

export function mergeObjects(obj1: any, obj2: any): any {
  // TODO: Fix object mutation
  // This mutates the first object
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
}

export function updateArrayInObject(obj: any, arrayKey: string, item: any): any {
  // TODO: Fix object mutation
  // This mutates the original object
  if (!obj[arrayKey]) {
    obj[arrayKey] = [];
  }
  obj[arrayKey].push(item);
  return obj;
}

interface User {
  name: string;
  email: string;
  age: number;
  address?: string;
}

/**
 * DEBUGGING TASK:
 * 1. Identify object mutations
 * 2. Use spread operator or Object.assign
 * 3. Implement deep cloning for nested objects
 * 4. Test immutability
 */
