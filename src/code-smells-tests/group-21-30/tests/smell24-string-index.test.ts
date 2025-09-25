/**
 * CODE SMELL 24: STRING INDEX TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Test string index scenarios
 * 3. Verify bounds checking works
 * 4. Run with: npm test
 */

import { 
  getLastCharacter, 
  getCharacterAt, 
  reverseString, 
  getSubstring, 
  findCharacter, 
  replaceCharacter 
} from '../smell24-string-index';

describe('String Index Tests', () => {
  describe('getLastCharacter', () => {
    test('should get last character', () => {
      // TODO: Write test here
      // Hint: Test with valid string
    });

    test('should handle empty string', () => {
      // TODO: Write test here
      // Hint: Test with empty string
    });

    test('should handle single character', () => {
      // TODO: Write test here
      // Hint: Test with single character string
    });
  });

  describe('getCharacterAt', () => {
    test('should get character at index', () => {
      // TODO: Write test here
      // Hint: Test with valid string and index
    });

    test('should handle out of bounds', () => {
      // TODO: Write test here
      // Hint: Test with index out of bounds
    });

    test('should handle empty string', () => {
      // TODO: Write test here
      // Hint: Test with empty string
    });
  });

  describe('reverseString', () => {
    test('should reverse string', () => {
      // TODO: Write test here
      // Hint: Test with valid string
    });

    test('should handle empty string', () => {
      // TODO: Write test here
      // Hint: Test with empty string
    });

    test('should handle single character', () => {
      // TODO: Write test here
      // Hint: Test with single character string
    });
  });

  describe('getSubstring', () => {
    test('should get substring', () => {
      // TODO: Write test here
      // Hint: Test with valid string and range
    });

    test('should handle out of bounds', () => {
      // TODO: Write test here
      // Hint: Test with range out of bounds
    });

    test('should handle empty string', () => {
      // TODO: Write test here
      // Hint: Test with empty string
    });
  });

  describe('findCharacter', () => {
    test('should find character', () => {
      // TODO: Write test here
      // Hint: Test with valid string and character
    });

    test('should handle character not found', () => {
      // TODO: Write test here
      // Hint: Test with character that doesn't exist
    });

    test('should handle empty string', () => {
      // TODO: Write test here
      // Hint: Test with empty string
    });
  });

  describe('replaceCharacter', () => {
    test('should replace character', () => {
      // TODO: Write test here
      // Hint: Test with valid string, index, and character
    });

    test('should handle out of bounds', () => {
      // TODO: Write test here
      // Hint: Test with index out of bounds
    });

    test('should handle empty string', () => {
      // TODO: Write test here
      // Hint: Test with empty string
    });
  });
});

