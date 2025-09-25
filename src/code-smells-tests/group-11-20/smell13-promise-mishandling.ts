/**
 * CODE SMELL 13: PROMISE MISHANDLING
 * 
 * Problem: Incorrect use of promises
 * This is a common bug in JavaScript
 */

export function fetchData(url: string): Promise<any> {
  // TODO: Fix promise mishandling
  // This doesn't handle errors properly
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

export function processMultipleRequests(urls: string[]): Promise<any[]> {
  // TODO: Fix promise mishandling
  // This doesn't handle errors properly
  const promises = urls.map(url => fetchData(url));
  return Promise.all(promises);
}

export function fetchWithTimeout(url: string, timeout: number): Promise<any> {
  // TODO: Fix promise mishandling
  // This doesn't handle timeout properly
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, timeout);
    
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data));
  });
}

export function retryOperation(operation: () => Promise<any>, retries: number): Promise<any> {
  // TODO: Fix promise mishandling
  // This doesn't handle retries properly
  return operation()
    .catch(error => {
      if (retries > 0) {
        return retryOperation(operation, retries - 1);
      }
      throw error;
    });
}

export function chainOperations(data: any): Promise<any> {
  // TODO: Fix promise mishandling
  // This doesn't handle errors properly
  return Promise.resolve(data)
    .then(data => processData(data))
    .then(data => transformData(data))
    .then(data => saveData(data));
}

export function processData(data: any): Promise<any> {
  // TODO: Implement
  return Promise.resolve(data);
}

export function transformData(data: any): Promise<any> {
  // TODO: Implement
  return Promise.resolve(data);
}

export function saveData(data: any): Promise<any> {
  // TODO: Implement
  return Promise.resolve(data);
}

/**
 * DEBUGGING TASK:
 * 1. Identify promise mishandling
 * 2. Add proper error handling
 * 3. Handle edge cases
 * 4. Test with various scenarios
 */

