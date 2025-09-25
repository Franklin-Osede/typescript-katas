/**
 * CODE SMELL 35: DATE METHODS MISUSE
 * 
 * Problem: Incorrect use of date methods causing unexpected behavior
 * This is common when not understanding date method behavior
 */

export function getCurrentDate(): string {
  // TODO: Fix date methods misuse
  // This will return different formats in different timezones
  return new Date().toString();
}

export function getCurrentTime(): number {
  // TODO: Fix date methods misuse
  // This will return different values in different timezones
  return new Date().getTime();
}

export function formatDate(date: Date): string {
  // TODO: Fix date methods misuse
  // This will return different formats in different locales
  return date.toLocaleDateString();
}

export function addDays(date: Date, days: number): Date {
  // TODO: Fix date methods misuse
  // This will mutate the original date
  date.setDate(date.getDate() + days);
  return date;
}

export function getMonth(date: Date): number {
  // TODO: Fix date methods misuse
  // This returns 0-based month (0 = January)
  return date.getMonth();
}

export function getDay(date: Date): number {
  // TODO: Fix date methods misuse
  // This returns 0-based day (0 = Sunday)
  return date.getDay();
}

/**
 * DEBUGGING TASK:
 * 1. Identify date methods misuse
 * 2. Use appropriate methods
 * 3. Handle timezone issues
 * 4. Test with various dates
 */

