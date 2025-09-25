/**
 * CODE SMELL 15: OBJECT MUTATION TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Test object mutation scenarios
 * 3. Verify immutability works
 * 4. Run with: npm test
 */

import { 
  updateUser, 
  addPropertyToObject, 
  removePropertyFromObject, 
  mergeObjects, 
  updateNestedProperty, 
  clearObject 
} from '../smell15-object-mutation';

describe('Object Mutation Tests', () => {
  describe('updateUser', () => {
    test('should update user', () => {
      // TODO: Write test here
      // Hint: Test with user object and updates
    });

    test('should not mutate original object', () => {
      // TODO: Write test here
      // Hint: Test that original object is not modified
    });

    test('should handle partial updates', () => {
      // TODO: Write test here
      // Hint: Test with partial updates
    });
  });

  describe('addPropertyToObject', () => {
    test('should add property to object', () => {
      // TODO: Write test here
      // Hint: Test with object, key, and value
    });

    test('should not mutate original object', () => {
      // TODO: Write test here
      // Hint: Test that original object is not modified
    });

    test('should handle existing properties', () => {
      // TODO: Write test here
      // Hint: Test with object that already has the property
    });
  });

  describe('removePropertyFromObject', () => {
    test('should remove property from object', () => {
      // TODO: Write test here
      // Hint: Test with object and key
    });

    test('should not mutate original object', () => {
      // TODO: Write test here
      // Hint: Test that original object is not modified
    });

    test('should handle non-existent properties', () => {
      // TODO: Write test here
      // Hint: Test with key that doesn't exist
    });
  });

  describe('mergeObjects', () => {
    test('should merge objects', () => {
      // TODO: Write test here
      // Hint: Test with two objects
    });

    test('should not mutate original objects', () => {
      // TODO: Write test here
      // Hint: Test that original objects are not modified
    });

    test('should handle empty objects', () => {
      // TODO: Write test here
      // Hint: Test with empty objects
    });
  });

  describe('updateNestedProperty', () => {
    test('should update nested property', () => {
      // TODO: Write test here
      // Hint: Test with nested object and path
    });

    test('should not mutate original object', () => {
      // TODO: Write test here
      // Hint: Test that original object is not modified
    });

    test('should handle invalid paths', () => {
      // TODO: Write test here
      // Hint: Test with path that doesn't exist
    });
  });

  describe('clearObject', () => {
    test('should clear object', () => {
      // TODO: Write test here
      // Hint: Test with object
    });

    test('should not mutate original object', () => {
      // TODO: Write test here
      // Hint: Test that original object is not modified
    });

    test('should handle empty object', () => {
      // TODO: Write test here
      // Hint: Test with empty object
    });
  });
});

