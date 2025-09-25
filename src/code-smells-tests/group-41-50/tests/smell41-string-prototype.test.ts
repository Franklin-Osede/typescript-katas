/**
 * CODE SMELL 41: STRING PROTOTYPE TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Test string prototype misuse scenarios
 * 3. Verify global modifications are avoided
 * 4. Run with: npm test
 */

import { 
  extendString, 
  modifyStringPrototype, 
  addStringMethod, 
  overrideStringMethod, 
  addStringProperty, 
  modifyStringConstructor 
} from '../smell41-string-prototype';

describe('String Prototype Tests', () => {
  describe('extendString', () => {
    test('should not extend string prototype globally', () => {
      // TODO: Write test here
    });
  });

  describe('modifyStringPrototype', () => {
    test('should not modify string prototype globally', () => {
      // TODO: Write test here
    });
  });

  describe('addStringMethod', () => {
    test('should not add string method globally', () => {
      // TODO: Write test here
    });
  });

  describe('overrideStringMethod', () => {
    test('should not override string method globally', () => {
      // TODO: Write test here
    });
  });

  describe('addStringProperty', () => {
    test('should not add string property globally', () => {
      // TODO: Write test here
    });
  });

  describe('modifyStringConstructor', () => {
    test('should not modify string constructor globally', () => {
      // TODO: Write test here
    });
  });
});

