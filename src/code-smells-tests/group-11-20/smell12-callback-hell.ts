/**
 * CODE SMELL 12: CALLBACK HELL
 * 
 * Problem: Nested callbacks making code hard to read
 * This is a common issue in JavaScript
 */

export function fetchUserData(userId: number, callback: (error: any, data: any) => void): void {
  // TODO: Fix callback hell
  // This creates deeply nested callbacks
  fetch(`/api/users/${userId}`, (error, userData) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    fetch(`/api/posts/${userId}`, (error, posts) => {
      if (error) {
        callback(error, null);
        return;
      }
      
      fetch(`/api/comments/${userId}`, (error, comments) => {
        if (error) {
          callback(error, null);
          return;
        }
        
        callback(null, {
          user: userData,
          posts: posts,
          comments: comments
        });
      });
    });
  });
}

export function processData(data: any, callback: (error: any, result: any) => void): void {
  // TODO: Fix callback hell
  // This creates deeply nested callbacks
  validateData(data, (error, validData) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    transformData(validData, (error, transformedData) => {
      if (error) {
        callback(error, null);
        return;
      }
      
      saveData(transformedData, (error, savedData) => {
        if (error) {
          callback(error, null);
          return;
        }
        
        callback(null, savedData);
      });
    });
  });
}

export function validateData(data: any, callback: (error: any, result: any) => void): void {
  // TODO: Implement validation
  callback(null, data);
}

export function transformData(data: any, callback: (error: any, result: any) => void): void {
  // TODO: Implement transformation
  callback(null, data);
}

export function saveData(data: any, callback: (error: any, result: any) => void): void {
  // TODO: Implement save
  callback(null, data);
}

/**
 * DEBUGGING TASK:
 * 1. Identify callback hell
 * 2. Refactor to use promises or async/await
 * 3. Improve error handling
 * 4. Make code more readable
 */

