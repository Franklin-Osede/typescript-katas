/**
 * SISTEMA DE LOGGING PARA DEBUGGING
 * 
 * Utilidades para hacer debugging más efectivo
 */

export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string, data?: any): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    
    console.log(logEntry);
    if (data !== undefined) {
      console.log('Data:', data);
    }
    
    this.logs.push(logEntry);
  }

  error(message: string, error?: any): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ERROR: ${message}`;
    
    console.error(logEntry);
    if (error !== undefined) {
      console.error('Error details:', error);
    }
    
    this.logs.push(logEntry);
  }

  warn(message: string, data?: any): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] WARN: ${message}`;
    
    console.warn(logEntry);
    if (data !== undefined) {
      console.warn('Warning data:', data);
    }
    
    this.logs.push(logEntry);
  }

  debug(message: string, data?: any): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] DEBUG: ${message}`;
    
    console.log(logEntry);
    if (data !== undefined) {
      console.log('Debug data:', data);
    }
    
    this.logs.push(logEntry);
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }

  printLogs(): void {
    console.log('=== ALL LOGS ===');
    this.logs.forEach(log => console.log(log));
    console.log('================');
  }
}

// Instancia global del logger
export const logger = Logger.getInstance();

// Funciones de conveniencia
export const log = (message: string, data?: any) => logger.log(message, data);
export const logError = (message: string, error?: any) => logger.error(message, error);
export const logWarn = (message: string, data?: any) => logger.warn(message, data);
export const logDebug = (message: string, data?: any) => logger.debug(message, data);

