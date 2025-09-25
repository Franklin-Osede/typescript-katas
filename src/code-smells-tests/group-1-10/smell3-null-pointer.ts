/**
 * CODE SMELL 3: NULL POINTER
 * 
 * Problem: Accessing properties of null/undefined objects
 * This is a common runtime error in JavaScript
 */

export class UserService {
  private users: Map<number, User> = new Map();

  addUser(user: User): void {
    this.users.set(user.id, user);
  }

  getUser(id: number): User | null {
    return this.users.get(id) || null;
  }

  getUserName(id: number): string {
    const user = this.getUser(id);
    // TODO: Fix null pointer exception
    // This will throw if user is null
    if (!user) return '';
    return user.name;
  }

  getUserEmail(id: number): string {
    const user = this.getUser(id);
    // TODO: Fix null pointer exception
    // This will throw if user is null
    if (!user) return '';
    return user.email;
  }

  updateUser(id: number, updates: Partial<User>): boolean {
    const user = this.getUser(id);
    if (!user) return false;
    
    // TODO: Fix potential null pointer
    // What if updates.name is undefined?
    if (updates.name !== undefined) user.name = updates.name;
    if (updates.email !== undefined) user.email = updates.email;
    
    return true;
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

/**
 * DEBUGGING TASK:
 * 1. Identify null pointer exceptions
 * 2. Add null checks
 * 3. Handle edge cases gracefully
 * 4. Test with null/undefined inputs
 */

