/**
 * CODE SMELL 11: MUTATION
 * 
 * Problem: Mutating objects/arrays when you shouldn't
 * This is a common bug in JavaScript
 */

export function processUsers(users: any[]): any[] {
  // TODO: Fix mutation issue
  // This mutates the original array
  for (let i = 0; i < users.length; i++) {
    users[i].processed = true;
  }
  return users;
}

export function updateUserData(user: any, updates: any): any {
  // TODO: Fix mutation issue
  // This mutates the original object
  user.name = updates.name;
  user.email = updates.email;
  return user;
}

export function sortUsers(users: any[]): any[] {
  // TODO: Fix mutation issue
  // This mutates the original array
  return users.sort((a, b) => a.name.localeCompare(b.name));
}

export function filterActiveUsers(users: any[]): any[] {
  // TODO: Fix mutation issue
  // This mutates the original array
  return users.filter(user => user.active);
}

export function addUserToGroup(user: any, group: any): any {
  // TODO: Fix mutation issue
  // This mutates the original objects
  user.group = group;
  group.members.push(user);
  return user;
}

/**
 * DEBUGGING TASK:
 * 1. Identify mutation issues
 * 2. Create copies instead of mutating
 * 3. Test that original data is preserved
 * 4. Use immutable operations
 */

