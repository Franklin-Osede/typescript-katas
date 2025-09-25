/**
 * CODE SMELL 38: ARRAY PROTOTYPE TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Test array prototype misuse scenarios
 * 3. Verify global modifications are avoided
 * 4. Run with: npm test
 */

import { 
  extendArray, 
  modifyArrayPrototype, 
  addArrayMethod, 
  overrideArrayMethod, 
  addArrayProperty, 
  modifyArrayConstructor 
} from '../smell38-array-prototype';

describe('Array Prototype Tests', () => {
  describe('extendArray', () => {
    test('should not extend array prototype globally', () => {
      // TODO: Write test here
    });
  });

  describe('modifyArrayPrototype', () => {
    test('should not modify array prototype globally', () => {
      // TODO: Write test here
    });
  });

  describe('addArrayMethod', () => {
    test('should not add array method globally', () => {
      // TODO: Write test here
    });
  });

  describe('overrideArrayMethod', () => {
    test('should not override array method globally', () => {
      // TODO: Write test here
    });
  });

  describe('addArrayProperty', () => {
    test('should not add array property globally', () => {
      // TODO: Write test here
    });
  });

  describe('modifyArrayConstructor', () => {
    test('should not modify array constructor globally', () => {
      // TODO: Write test here
    });
  });
});

