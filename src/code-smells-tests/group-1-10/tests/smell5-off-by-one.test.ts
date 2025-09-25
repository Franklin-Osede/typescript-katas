/**
 * CODE SMELL 5: OFF-BY-ONE TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Test off-by-one scenarios
 * 3. Verify bounds checking works
 * 4. Run with: npm test
 */

import { 
  findMaxInArray, 
  reverseArray, 
  findLastOccurrence, 
  findFirstOccurrence, 
  findMiddleElement 
} from '../smell5-off-by-one';

describe('Off-by-One Tests', () => {
  describe('findMaxInArray', () => {
    test('should find maximum in array', () => {
      // TODO: Write test here
      // Hint: Test with normal array
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });

    test('should handle single element array', () => {
      // TODO: Write test here
      // Hint: Test with single element
    });

    test('should handle array with duplicates', () => {
      // TODO: Write test here
      // Hint: Test with array containing duplicates
    });
  });

  describe('reverseArray', () => {
    test('should reverse array', () => {
      // TODO: Write test here
      // Hint: Test with normal array
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });

    test('should handle single element array', () => {
      // TODO: Write test here
      // Hint: Test with single element
    });

    test('should handle array with odd length', () => {
      // TODO: Write test here
      // Hint: Test with odd length array
    });
  });

  describe('findLastOccurrence', () => {
    test('should find last occurrence', () => {
      // TODO: Write test here
      // Hint: Test with array containing duplicates
    });

    test('should return -1 for non-existing element', () => {
      // TODO: Write test here
      // Hint: Test with non-existing element
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });
  });

  describe('findFirstOccurrence', () => {
    test('should find first occurrence', () => {
      // TODO: Write test here
      // Hint: Test with array containing duplicates
    });

    test('should return -1 for non-existing element', () => {
      // TODO: Write test here
      // Hint: Test with non-existing element
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });
  });

  describe('findMiddleElement', () => {
    test('should find middle element', () => {
      // TODO: Write test here
      // Hint: Test with odd length array
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });

    test('should handle single element array', () => {
      // TODO: Write test here
      // Hint: Test with single element
    });
  });
});