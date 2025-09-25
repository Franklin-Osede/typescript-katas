/**
 * CODE SMELL 8: ASYNC/AWAIT MISUSE
 * 
 * Problem: Incorrect use of async/await
 * This is a common bug in JavaScript
 */

export class DataService {
  async fetchData(url: string): Promise<any> {
    // TODO: Fix async/await misuse
    // This will block the event loop
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async processData(data: any[]): Promise<any[]> {
    // TODO: Fix async/await misuse
    // This will process data sequentially instead of in parallel
    const results = [];
    for (let i = 0; i < data.length; i++) {
      const result = await this.processItem(data[i]);
      results.push(result);
    }
    return results;
  }

  async processItem(item: any): Promise<any> {
    // TODO: Fix async/await misuse
    // This will block the event loop
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, 1000);
    });
  }

  async fetchMultipleUrls(urls: string[]): Promise<any[]> {
    // TODO: Fix async/await misuse
    // This will fetch URLs sequentially instead of in parallel
    const results = [];
    for (const url of urls) {
      const data = await this.fetchData(url);
      results.push(data);
    }
    return results;
  }
}

/**
 * DEBUGGING TASK:
 * 1. Identify async/await misuse
 * 2. Fix blocking operations
 * 3. Implement proper error handling
 * 4. Optimize for performance
 */

