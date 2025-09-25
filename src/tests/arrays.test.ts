/**
 * ARRAY TESTS
 * 
 * Instructions:
 * 1. Write tests for each function
 * 2. Include edge cases (empty arrays, single element, etc.)
 * 3. Validate that debugging functions work correctly
 * 4. Run with: npm test
 */

// Import functions from exercises
import {
  sumArray,
  findMax,
  findMin,
  calculateAverage,
  reverseArray,
  countOccurrences,
  removeDuplicates,
  rotateArray,
  twoSum,
  bubbleSort,
  binarySearch,
  maxSubarraySum,
  findSecondLargest,
  isSorted,
  findUniqueElements
} from '../ejercicios/arrays';

// Import debugging functions
import {
  sumArrayBuggy,
  findMaxBuggy,
  reverseArrayBuggy,
  countOccurrencesBuggy,
  removeDuplicatesBuggy,
  rotateArrayBuggy,
  twoSumBuggy,
  bubbleSortBuggy
} from '../debugging/debug-arrays';

describe('Arrays', () => {
  describe('Sum of elements', () => {
    test('should sum elements correctly', () => {
      // TODO: Write tests here
      // Hint: Test normal arrays, empty arrays, single element
    });
  });

  describe('Find maximum', () => {
    test('should find the maximum number', () => {
      // TODO: Write tests here
      // Hint: Test normal arrays, empty arrays, single element, negatives
    });
  });

  describe('Find minimum', () => {
    test('should find the minimum number', () => {
      // TODO: Write tests here
    });
  });

  describe('Calculate average', () => {
    test('should calculate average correctly', () => {
      // TODO: Write tests here
    });
  });

  describe('Reverse array', () => {
    test('should reverse array correctly', () => {
      // TODO: Write tests here
    });
  });

  describe('Count occurrences', () => {
    test('should count occurrences correctly', () => {
      // TODO: Write tests here
    });
  });

  describe('Remove duplicates', () => {
    test('should remove duplicates correctly', () => {
      // TODO: Write tests here
    });
  });

  describe('Rotate array', () => {
    test('should rotate array correctly', () => {
      // TODO: Write tests here
    });
  });

  describe('Two Sum', () => {
    test('should find two numbers that sum to target', () => {
      // TODO: Write tests here
    });
  });

  describe('Bubble Sort', () => {
    test('should sort array correctly', () => {
      // TODO: Write tests here
    });
  });

  describe('Binary search', () => {
    test('should find elements in sorted array', () => {
      // TODO: Write tests here
    });
  });

  describe('Maximum subarray sum', () => {
    test('should find maximum subarray sum', () => {
      // TODO: Write tests here
    });
  });

  describe('Second largest element', () => {
    test('should find second largest element', () => {
      // TODO: Write tests here
    });
  });

  describe('Check if sorted', () => {
    test('should check if array is sorted', () => {
      // TODO: Write tests here
    });
  });

  describe('Unique elements', () => {
    test('should find unique elements', () => {
      // TODO: Write tests here
    });
  });
});

describe('Debugging', () => {
  describe('Sum with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
      // Hint: Test that the function works the same as sumArray
    });
  });

  describe('Maximum with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
    });
  });

  describe('Reverse with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
    });
  });

  describe('Count with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
    });
  });

  describe('Remove duplicates with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
    });
  });

  describe('Rotate with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
    });
  });

  describe('Two Sum with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
    });
  });

  describe('Bubble Sort with bug', () => {
    test('should work correctly after fixing the bug', () => {
      // TODO: Write tests here
    });
  });
});
