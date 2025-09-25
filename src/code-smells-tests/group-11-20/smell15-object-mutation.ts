/**
 * CODE SMELL 15: OBJECT MUTATION
 * 
 * Problem: Mutating objects when you shouldn't
 * This is a common bug in JavaScript
 */

export function updateUser(user: any, updates: any): any {
  // TODO: Fix object mutation
  // This mutates the original object
  user.name = updates.name;
  user.email = updates.email;
  user.age = updates.age;
  return user;
}

export function addPropertyToObject(obj: any, key: string, value: any): any {
  // TODO: Fix object mutation
  // This mutates the original object
  obj[key] = value;
  return obj;
}

export function removePropertyFromObject(obj: any, key: string): any {
  // TODO: Fix object mutation
  // This mutates the original object
  delete obj[key];
  return obj;
}

export function mergeObjects(obj1: any, obj2: any): any {
  // TODO: Fix object mutation
  // This mutates the first object
  Object.assign(obj1, obj2);
  return obj1;
}

export function updateNestedProperty(obj: any, path: string, value: any): any {
  // TODO: Fix object mutation
  // This mutates the original object
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
  return obj;
}

export function clearObject(obj: any): any {
  // TODO: Fix object mutation
  // This mutates the original object
  for (let key in obj) {
    delete obj[key];
  }
  return obj;
}

/**
 * DEBUGGING TASK:
 * 1. Identify object mutation issues
 * 2. Create copies instead of mutating
 * 3. Test that original object is preserved
 * 4. Use immutable operations
 */

