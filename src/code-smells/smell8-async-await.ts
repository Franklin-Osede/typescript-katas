/**
 * CODE SMELL 8: ASYNC/AWAIT MISUSE
 * 
 * Problem: Incorrect use of async/await causing blocking or race conditions
 * This is a common issue in modern JavaScript development
 */

export class DataService {
  private cache: Map<string, any> = new Map();

  async fetchData(url: string): Promise<any> {
    // TODO: Fix async/await misuse
    // This blocks the event loop
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getCachedData(key: string): Promise<any> {
    // TODO: Fix async/await misuse
    // This should not be async if it's synchronous
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    return null;
  }

  async processMultipleRequests(urls: string[]): Promise<any[]> {
    // TODO: Fix async/await misuse
    // This processes requests sequentially instead of in parallel
    const results: any[] = [];
    for (let url of urls) {
      const data = await this.fetchData(url);
      results.push(data);
    }
    return results;
  }

  async handleError(): Promise<void> {
    try {
      await this.fetchData('invalid-url');
    } catch (error) {
      // TODO: Fix async/await misuse
      // This doesn't properly handle the error
      console.log('Error occurred');
    }
  }

  // TODO: Fix async/await misuse
  // This function is marked async but doesn't use await
  async getSyncData(): Promise<string> {
    return 'synchronous data';
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify async/await misuse
 * 2. Fix blocking operations
 * 3. Implement proper error handling
 * 4. Optimize for performance
 */

