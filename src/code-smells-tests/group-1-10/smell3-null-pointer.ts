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

  // 🐛 BUG 1: Nested property access without null checks
  getUserTheme(id: number): string {
    const user = this.getUser(id);
    return user.settings.theme; // Will crash if user or settings is null
  }

  // 🐛 BUG 2: Method chaining without null checks
  getUserDisplayName(id: number): string {
    const user = this.getUser(id);
    return user.profile.displayName; // Will crash if user or profile is null
  }

  // 🐛 BUG 3: Array method with potential null elements
  getUsersByRole(role: string): User[] {
    const allUsers = Array.from(this.users.values());
    return allUsers.filter(user => user.role === role); // Will crash if user is null
  }

  // 🐛 BUG 4: Complex object construction without null checks
  getUserProfile(id: number): UserProfile | null {
    const user = this.getUser(id);
    return {
      name: user.name,                    // Will crash if user is null
      email: user.email,                  // Will crash if user is null
      settings: user.settings,            // Will crash if user is null
      preferences: user.settings.theme     // Will crash if user or settings is null
    };
  }
}

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
  settings?: UserSettings;
  profile?: UserProfile;
}

interface UserSettings {
  theme: string;
  notifications: boolean;
}

interface UserProfile {
  displayName: string;
  avatar: string;
}

interface UserProfile {
  name: string;
  email: string;
  settings: UserSettings;
  preferences: string;
}

/**
 * DEBUGGING TASK:
 * 1. Identify null pointer exceptions
 * 2. Add null checks
 * 3. Handle edge cases gracefully
 * 4. Test with null/undefined inputs
 */

