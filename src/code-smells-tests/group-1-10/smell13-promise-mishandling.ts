/**
 * CODE SMELL 13: PROMISE MISHANDLING
 * 
 * Problem: Incorrect promise handling causing unhandled rejections
 * This is common in modern JavaScript development
 */

export function fetchData(url: string): Promise<any> {
  // TODO: Fix promise mishandling
  // This doesn't handle errors properly
  return fetch(url)
    .then(response => response.json());
}

export function processMultipleUrls(urls: string[]): Promise<any[]> {
  // TODO: Fix promise mishandling
  // This doesn't handle individual failures
  const promises = urls.map(url => fetchData(url));
  return Promise.all(promises);
}

export function fetchWithTimeout(url: string, timeout: number): Promise<any> {
  // TODO: Fix promise mishandling
  // This creates a race condition
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), timeout);
  });
  
  return Promise.race([fetchPromise, timeoutPromise]);
}

export function retryOperation(operation: () => Promise<any>, retries: number): Promise<any> {
  // TODO: Fix promise mishandling
  // This doesn't handle the final rejection
  return operation().catch(error => {
    if (retries > 0) {
      return retryOperation(operation, retries - 1);
    }
    throw error;
  });
}

export function chainOperations(): Promise<any> {
  // TODO: Fix promise mishandling
  // This doesn't handle errors in the chain
  return fetchData('/api/data')
    .then(data => processData(data))
    .then(processed => saveData(processed))
    .then(saved => sendNotification(saved));
}

// Mock functions
function processData(data: any): any {
  return data;
}

function saveData(data: any): any {
  return data;
}

function sendNotification(data: any): any {
  return data;
}

/**
 * DEBUGGING TASK:
 * 1. Identify promise mishandling
 * 2. Add proper error handling
 * 3. Use try/catch with async/await
 * 4. Handle unhandled rejections
 */
