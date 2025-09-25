/**
 * CODE SMELL 14: ARRAY MUTATION TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Test array mutation scenarios
 * 3. Verify immutability works
 * 4. Run with: npm test
 */

import { 
  addItemToArray, 
  removeItemFromArray, 
  sortArrayInPlace, 
  reverseArrayInPlace, 
  filterArrayInPlace, 
  updateArrayItem 
} from '../smell14-array-mutation';

describe('Array Mutation Tests', () => {
  describe('addItemToArray', () => {
    test('should add item to array', () => {
      // TODO: Write test here
      // Hint: Test with array and item
    });

    test('should not mutate original array', () => {
      // TODO: Write test here
      // Hint: Test that original array is not modified
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });
  });

  describe('removeItemFromArray', () => {
    test('should remove item from array', () => {
      // TODO: Write test here
      // Hint: Test with array and index
    });

    test('should not mutate original array', () => {
      // TODO: Write test here
      // Hint: Test that original array is not modified
    });

    test('should handle invalid index', () => {
      // TODO: Write test here
      // Hint: Test with out of bounds index
    });
  });

  describe('sortArrayInPlace', () => {
    test('should sort array', () => {
      // TODO: Write test here
      // Hint: Test with unsorted array
    });

    test('should not mutate original array', () => {
      // TODO: Write test here
      // Hint: Test that original array is not modified
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });
  });

  describe('reverseArrayInPlace', () => {
    test('should reverse array', () => {
      // TODO: Write test here
      // Hint: Test with array
    });

    test('should not mutate original array', () => {
      // TODO: Write test here
      // Hint: Test that original array is not modified
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });
  });

  describe('filterArrayInPlace', () => {
    test('should filter array', () => {
      // TODO: Write test here
      // Hint: Test with array and predicate
    });

    test('should not mutate original array', () => {
      // TODO: Write test here
      // Hint: Test that original array is not modified
    });

    test('should handle empty array', () => {
      // TODO: Write test here
      // Hint: Test with empty array
    });
  });

  describe('updateArrayItem', () => {
    test('should update array item', () => {
      // TODO: Write test here
      // Hint: Test with array, index, and new value
    });

    test('should not mutate original array', () => {
      // TODO: Write test here
      // Hint: Test that original array is not modified
    });

    test('should handle invalid index', () => {
      // TODO: Write test here
      // Hint: Test with out of bounds index
    });
  });
});

