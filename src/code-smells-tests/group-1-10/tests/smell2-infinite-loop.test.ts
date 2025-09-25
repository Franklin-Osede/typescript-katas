/**
 * CODE SMELL 2: INFINITE LOOP TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Test infinite loop scenarios
 * 3. Verify bounds checking works
 * 4. Run with: npm test
 */

import { findIndexInSortedArray, findIndexInSortedArrayBuggy } from '../smell2-infinite-loop';

describe('Infinite Loop Tests', () => {
  describe('findIndexInSortedArray', () => {
    test('should find existing element', () => {
      // TODO: Write test here
      // Hint: Test with sorted array and existing target
    });

    test('should return -1 for non-existing element', () => {
      // TODO: Write test here
      // Hint: Test with sorted array and non-existing target
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });

    test('should handle single element array', () => {
      // TODO: Write test here
      // Hint: Test with single element array
    });

    test('should not cause infinite loop', () => {
      // TODO: Write test here
      // Hint: Test that function terminates
    });
  });

  describe('findIndexInSortedArrayBuggy', () => {
    test('should find existing element', () => {
      // TODO: Write test here
      // Hint: Test with sorted array and existing target
    });

    test('should return -1 for non-existing element', () => {
      // TODO: Write test here
      // Hint: Test with sorted array and non-existing target
    });

    test('should handle edge cases', () => {
      // TODO: Write test here
      // Hint: Test with edge cases
    });
  });

  describe('Infinite Loop Scenarios', () => {
    test('should handle large arrays', () => {
      // TODO: Write test here
      // Hint: Test with large arrays
    });

    test('should handle arrays with duplicates', () => {
      // TODO: Write test here
      // Hint: Test with arrays containing duplicates
    });

    test('should handle arrays with negative numbers', () => {
      // TODO: Write test here
      // Hint: Test with arrays containing negative numbers
    });
  });
});