/**
 * CODE SMELL 12: CALLBACK HELL
 * 
 * Problem: Nested callbacks making code hard to read and maintain
 * This is common in JavaScript before async/await
 */

export function fetchUserData(userId: number, callback: (error: any, data: any) => void): void {
  // TODO: Fix callback hell
  // This creates deeply nested callbacks
  fetch(`/api/users/${userId}`, (error, userData) => {
    if (error) {
      callback(error, null);
    } else {
      fetch(`/api/posts/${userId}`, (error, posts) => {
        if (error) {
          callback(error, null);
        } else {
          fetch(`/api/comments/${userId}`, (error, comments) => {
            if (error) {
              callback(error, null);
            } else {
              callback(null, {
                user: userData,
                posts: posts,
                comments: comments
              });
            }
          });
        }
      });
    }
  });
}

export function processFile(filePath: string, callback: (error: any, result: any) => void): void {
  // TODO: Fix callback hell
  // This creates deeply nested callbacks
  readFile(filePath, (error, content) => {
    if (error) {
      callback(error, null);
    } else {
      parseContent(content, (error, parsed) => {
        if (error) {
          callback(error, null);
        } else {
          validateData(parsed, (error, validated) => {
            if (error) {
              callback(error, null);
            } else {
              saveData(validated, (error, saved) => {
                if (error) {
                  callback(error, null);
                } else {
                  callback(null, saved);
                }
              });
            }
          });
        }
      });
    }
  });
}

// Mock functions for demonstration
function fetch(url: string, callback: (error: any, data: any) => void): void {
  // Mock implementation
}

function readFile(path: string, callback: (error: any, content: any) => void): void {
  // Mock implementation
}

function parseContent(content: any, callback: (error: any, parsed: any) => void): void {
  // Mock implementation
}

function validateData(data: any, callback: (error: any, validated: any) => void): void {
  // Mock implementation
}

function saveData(data: any, callback: (error: any, saved: any) => void): void {
  // Mock implementation
}

/**
 * DEBUGGING TASK:
 * 1. Identify callback hell
 * 2. Refactor to use async/await
 * 3. Use Promise.all for parallel operations
 * 4. Improve error handling
 */
