/**
 * CODE SMELLS PRACTICE - START HERE!
 * 
 * 100+ COMMON BUGS IN INTERVIEWS
 * Practice debugging these to improve your skills
 */

// Import code smells (first 10 for practice)
import { EventManager } from '../code-smells-tests/group-1-10/smell1-memory-leak';
import { findIndexInSortedArray } from '../code-smells-tests/group-1-10/smell2-infinite-loop';
import { UserService } from '../code-smells-tests/group-1-10/smell3-null-pointer';
import { Counter } from '../code-smells-tests/group-1-10/smell4-race-condition';
import { findMaxInArray, reverseArray, findLastOccurrence } from '../code-smells-tests/group-1-10/smell5-off-by-one';
import { isEvenNumber, isLeapYear, findMaximum, isPalindrome } from '../code-smells-tests/group-1-10/smell6-logic-error';
import { addNumbers, getArrayLength, processUserData, calculateAverage, formatDate } from '../code-smells-tests/group-1-10/smell7-type-error';
import { DataService } from '../code-smells-tests/group-1-10/smell8-async-await';
import { findDuplicates, fibonacci, searchInArray, mergeArrays, sortArray } from '../code-smells-tests/group-1-10/smell9-performance';
import { createCounter, processArray, createMultipliers, ScopeExample } from '../code-smells-tests/group-1-10/smell10-scope-issue';

// Import code smells (groups 11-20)
import { processUsers, updateUserData, sortUsers, filterActiveUsers, addUserToGroup } from '../code-smells-tests/group-11-20/smell11-mutation';
import { fetchUserData, processData, validateData, transformData, saveData } from '../code-smells-tests/group-11-20/smell12-callback-hell';
import { fetchData, processMultipleRequests, fetchWithTimeout, retryOperation, chainOperations } from '../code-smells-tests/group-11-20/smell13-promise-mishandling';
import { addItemToArray, removeItemFromArray, sortArrayInPlace, reverseArrayInPlace, filterArrayInPlace, updateArrayItem } from '../code-smells-tests/group-11-20/smell14-array-mutation';
import { updateUser, addPropertyToObject, removePropertyFromObject, mergeObjects, updateNestedProperty, clearObject } from '../code-smells-tests/group-11-20/smell15-object-mutation';
import { TimerManager, EventListenerManager } from '../code-smells-tests/group-11-20/smell16-memory-leak-2';
import { processData as processDataUndefined, calculateAverage as calculateAverageUndefined, formatString, accessProperty, compareValues, processArray as processArrayUndefined } from '../code-smells-tests/group-11-20/smell17-undefined-behavior';
import { getArrayElement, setArrayElement, getLastElement, getFirstElement, getMiddleElement, getElementRange } from '../code-smells-tests/group-11-20/smell18-array-bounds';
import { divideNumbers, calculatePercentage, calculateAverage as calculateAverageDivision, calculateSlope, calculateReciprocal, calculateRatio } from '../code-smells-tests/group-11-20/smell19-division-by-zero';
import { fibonacci as fibonacciStack, factorial, sumRecursive, powerRecursive, countdown, treeTraversal } from '../code-smells-tests/group-11-20/smell20-stack-overflow';

/**
 * PRACTICE EXERCISE 1: Memory Leak
 * Fix the EventManager to prevent memory leaks
 */
export function practiceMemoryLeak() {
  console.log('=== PRACTICING MEMORY LEAK DEBUGGING ===');
  
  const eventManager = new EventManager();
  
  // Add event listeners
  const callback1 = () => console.log('Event 1');
  const callback2 = () => console.log('Event 2');
  
  eventManager.addEventListener('test', callback1);
  eventManager.addEventListener('test', callback2);
  
  // TODO: Fix the memory leak
  // 1. Implement removeEventListener properly
  // 2. Add cleanup method
  // 3. Test that listeners are actually removed
  
  console.log('Memory leak practice completed');
}

/**
 * PRACTICE EXERCISE 2: Infinite Loop
 * Fix the binary search to prevent infinite loop
 */
export function practiceInfiniteLoop() {
  console.log('=== PRACTICING INFINITE LOOP DEBUGGING ===');
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = 7;
  
  // TODO: Fix the infinite loop
  // 1. Identify why the loop is infinite
  // 2. Fix the binary search implementation
  // 3. Test with edge cases
  
  const result = findIndexInSortedArray(arr, target);
  console.log(`Found ${target} at index: ${result}`);
}

/**
 * PRACTICE EXERCISE 3: Null Pointer
 * Fix the UserService to handle null values
 */
export function practiceNullPointer() {
  console.log('=== PRACTICING NULL POINTER DEBUGGING ===');
  
  const userService = new UserService();
  
  // TODO: Fix null pointer exceptions
  // 1. Add null checks
  // 2. Handle edge cases gracefully
  // 3. Test with null/undefined inputs
  
  try {
    const userName = userService.getUserName(1);
    console.log('User name:', userName);
  } catch (error) {
    console.log('Error caught:', error);
  }
}

/**
 * PRACTICE EXERCISE 4: Race Condition
 * Fix the Counter to prevent race conditions
 */
export function practiceRaceCondition() {
  console.log('=== PRACTICING RACE CONDITION DEBUGGING ===');
  
  const counter = new Counter();
  
  // TODO: Fix race condition
  // 1. Implement proper synchronization
  // 2. Test with concurrent operations
  // 3. Ensure thread safety
  
  // Simulate concurrent operations
  counter.increment();
  counter.increment();
  counter.decrement();
  
  console.log('Counter value:', counter.getCount());
}

/**
 * PRACTICE EXERCISE 5: Off-by-One Error
 * Fix the array functions to handle bounds correctly
 */
export function practiceOffByOne() {
  console.log('=== PRACTICING OFF-BY-ONE DEBUGGING ===');
  
  const arr = [3, 7, 2, 9, 1, 5, 8];
  
  // TODO: Fix off-by-one errors
  // 1. Fix findMaxInArray
  // 2. Fix reverseArray
  // 3. Fix findLastOccurrence
  // 4. Test with edge cases
  
  console.log('Original array:', arr);
  console.log('Max:', findMaxInArray(arr));
  console.log('Reversed:', reverseArray([...arr]));
  console.log('Last occurrence of 5:', findLastOccurrence(arr, 5));
}

/**
 * PRACTICE EXERCISE 6: Logic Error
 * Fix the logical conditions
 */
export function practiceLogicError() {
  console.log('=== PRACTICING LOGIC ERROR DEBUGGING ===');
  
  // TODO: Fix logic errors
  // 1. Fix isEvenNumber
  // 2. Fix isLeapYear
  // 3. Fix findMaximum
  // 4. Fix isPalindrome
  
  console.log('Is 4 even?', isEvenNumber(4));
  console.log('Is 2024 a leap year?', isLeapYear(2024));
  console.log('Max of 1, 5, 3:', findMaximum(1, 5, 3));
  console.log('Is "racecar" a palindrome?', isPalindrome("racecar"));
}

/**
 * PRACTICE EXERCISE 7: Type Error
 * Fix the type handling
 */
export function practiceTypeError() {
  console.log('=== PRACTICING TYPE ERROR DEBUGGING ===');
  
  // TODO: Fix type errors
  // 1. Fix addNumbers
  // 2. Fix getArrayLength
  // 3. Fix processUserData
  // 4. Fix calculateAverage
  // 5. Fix formatDate
  
  console.log('Add numbers:', addNumbers(5, 3));
  console.log('Array length:', getArrayLength([1, 2, 3]));
  console.log('User data:', processUserData({ name: 'John', age: 30, email: 'john@email.com' }));
  console.log('Average:', calculateAverage([1, 2, 3, 4, 5]));
  console.log('Date:', formatDate(new Date()));
}

/**
 * PRACTICE EXERCISE 8: Async/Await Misuse
 * Fix the async operations
 */
export function practiceAsyncAwait() {
  console.log('=== PRACTICING ASYNC/AWAIT DEBUGGING ===');
  
  const dataService = new DataService();
  
  // TODO: Fix async/await misuse
  // 1. Fix blocking operations
  // 2. Implement proper error handling
  // 3. Optimize for performance
  
  dataService.fetchData('https://api.example.com/data');
}

/**
 * PRACTICE EXERCISE 9: Performance Issues
 * Fix the inefficient algorithms
 */
export function practicePerformance() {
  console.log('=== PRACTICING PERFORMANCE DEBUGGING ===');
  
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  
  // TODO: Fix performance issues
  // 1. Optimize findDuplicates
  // 2. Optimize fibonacci
  // 3. Optimize searchInArray
  // 4. Optimize mergeArrays
  // 5. Optimize sortArray
  
  console.log('Duplicates:', findDuplicates(arr));
  console.log('Fibonacci(10):', fibonacci(10));
  console.log('Search 3:', searchInArray([1, 2, 3, 4, 5], 3));
  console.log('Merge arrays:', mergeArrays([1, 2, 3], [4, 5, 6]));
  console.log('Sort array:', sortArray([3, 1, 4, 1, 5, 9, 2, 6]));
}

/**
 * PRACTICE EXERCISE 10: Scope Issues
 * Fix the scope problems
 */
export function practiceScope() {
  console.log('=== PRACTICING SCOPE DEBUGGING ===');
  
  // TODO: Fix scope issues
  // 1. Fix createCounter
  // 2. Fix processArray
  // 3. Fix createMultipliers
  // 4. Fix ScopeExample
  
  const counter = createCounter();
  console.log('Counter:', counter());
  console.log('Counter:', counter());
  
  const multipliers = createMultipliers(2);
  console.log('Multipliers:', multipliers);
}

/**
 * MAIN PRACTICE FUNCTION
 * Run all debugging exercises
 */
export function practiceAllCodeSmells() {
  console.log('🚀 STARTING CODE SMELLS PRACTICE');
  console.log('=====================================');
  console.log('These are the most common bugs in interviews');
  console.log('Practice debugging these to improve your skills');
  console.log('');

  practiceMemoryLeak();
  console.log('');
  
  practiceInfiniteLoop();
  console.log('');
  
  practiceNullPointer();
  console.log('');
  
  practiceRaceCondition();
  console.log('');
  
  practiceOffByOne();
  console.log('');
  
  practiceLogicError();
  console.log('');
  
  practiceTypeError();
  console.log('');
  
  practiceAsyncAwait();
  console.log('');
  
  practicePerformance();
  console.log('');
  
  practiceScope();
  console.log('');
  
  console.log('✅ Code smells practice completed!');
  console.log('💡 You now have 100+ different code smells to practice');
  console.log('🔧 These are the most common bugs in interviews');
  console.log('🚀 Practice debugging these regularly to improve your skills');
}
