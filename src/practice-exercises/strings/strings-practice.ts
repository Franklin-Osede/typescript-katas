/**
 * STRINGS PRACTICE - START FROM ZERO
 * 
 * Instructions:
 * 1. Implement each function from scratch
 * 2. Use console.log for debugging
 * 3. Think about edge cases
 * 4. Consider time complexity
 */

/**
 * EXERCISE 1: Reverse string
 * Write a function that reverses a string
 */
export function reverseString(str: string): string {
  // TODO: Implement here
  // Hint: Use a loop or array methods
  // console.log('Reversing string:', str);
  
  return ''; // Change this
}

/**
 * EXERCISE 2: Check palindrome
 * Write a function that checks if a string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  // TODO: Implement here
  // Hint: Compare characters from both ends
  // console.log('Checking if palindrome:', str);
  
  return false; // Change this
}

/**
 * EXERCISE 3: Count vowels
 * Write a function that counts the number of vowels in a string
 */
export function countVowels(str: string): number {
  // TODO: Implement here
  // Hint: Check each character against vowel set
  // console.log('Counting vowels in:', str);
  
  return 0; // Change this
}

/**
 * EXERCISE 4: Remove duplicates
 * Write a function that removes duplicate characters from a string
 */
export function removeDuplicateChars(str: string): string {
  // TODO: Implement here
  // Hint: Use a Set or check if already exists
  // console.log('Removing duplicate chars from:', str);
  
  return ''; // Change this
}

/**
 * EXERCISE 5: First non-repeating character
 * Write a function that finds the first non-repeating character
 */
export function firstNonRepeatingChar(str: string): string {
  // TODO: Implement here
  // Hint: Count occurrences of each character
  // console.log('Finding first non-repeating char in:', str);
  
  return ''; // Change this
}

/**
 * EXERCISE 6: Anagram check
 * Write a function that checks if two strings are anagrams
 */
export function areAnagrams(str1: string, str2: string): boolean {
  // TODO: Implement here
  // Hint: Sort characters or count occurrences
  // console.log('Checking if anagrams:', str1, str2);
  
  return false; // Change this
}

/**
 * EXERCISE 7: String compression
 * Write a function that compresses a string (e.g., "aabcccccaaa" -> "a2b1c5a3")
 */
export function compressString(str: string): string {
  // TODO: Implement here
  // Hint: Count consecutive characters
  // console.log('Compressing string:', str);
  
  return ''; // Change this
}

/**
 * EXERCISE 8: Longest common prefix
 * Write a function that finds the longest common prefix of an array of strings
 */
export function longestCommonPrefix(strs: string[]): string {
  // TODO: Implement here
  // Hint: Compare characters position by position
  // console.log('Finding longest common prefix in:', strs);
  
  return ''; // Change this
}

/**
 * EXERCISE 9: Valid parentheses
 * Write a function that checks if parentheses are balanced
 */
export function isValidParentheses(str: string): boolean {
  // TODO: Implement here
  // Hint: Use a stack
  // console.log('Checking valid parentheses:', str);
  
  return false; // Change this
}

/**
 * EXERCISE 10: String to integer
 * Write a function that converts a string to an integer
 */
export function stringToInt(str: string): number {
  // TODO: Implement here
  // Hint: Handle signs and overflow
  // console.log('Converting string to int:', str);
  
  return 0; // Change this
}

/**
 * EXERCISE 11: Longest substring without repeating characters
 * Write a function that finds the length of the longest substring without repeating characters
 */
export function lengthOfLongestSubstring(str: string): number {
  // TODO: Implement here
  // Hint: Use sliding window technique
  // console.log('Finding longest substring without repeating chars in:', str);
  
  return 0; // Change this
}

/**
 * EXERCISE 12: Word count
 * Write a function that counts the number of words in a string
 */
export function wordCount(str: string): number {
  // TODO: Implement here
  // Hint: Split by spaces and filter empty strings
  // console.log('Counting words in:', str);
  
  return 0; // Change this
}

/**
 * EXERCISE 13: Capitalize words
 * Write a function that capitalizes the first letter of each word
 */
export function capitalizeWords(str: string): string {
  // TODO: Implement here
  // Hint: Split by spaces, capitalize first letter, join
  // console.log('Capitalizing words in:', str);
  
  return ''; // Change this
}

/**
 * EXERCISE 14: Remove spaces
 * Write a function that removes all spaces from a string
 */
export function removeSpaces(str: string): string {
  // TODO: Implement here
  // Hint: Use replace or filter
  // console.log('Removing spaces from:', str);
  
  return ''; // Change this
}

/**
 * EXERCISE 15: String rotation
 * Write a function that checks if one string is a rotation of another
 */
export function isRotation(str1: string, str2: string): boolean {
  // TODO: Implement here
  // Hint: Concatenate str1 with itself and check if str2 is substring
  // console.log('Checking if rotation:', str1, str2);
  
  return false; // Change this
}

/**
 * MAIN PRACTICE FUNCTION
 * Run all string exercises
 */
export function practiceStrings() {
  console.log('=== STRINGS PRACTICE ===');
  console.log('Implement each function from scratch');
  console.log('Use console.log for debugging');
  console.log('');

  // Test with sample data
  const testString = 'hello world';
  const testString2 = 'racecar';
  const testString3 = 'programming';
  const testString4 = 'aabcccccaaa';

  console.log('--- Testing String Functions ---');
  
  // Test each function
  console.log('1. Reverse "hello world":', reverseString(testString));
  console.log('2. Is "racecar" palindrome:', isPalindrome(testString2));
  console.log('3. Count vowels in "programming":', countVowels(testString3));
  console.log('4. Remove duplicate chars from "programming":', removeDuplicateChars(testString3));
  console.log('5. First non-repeating char in "programming":', firstNonRepeatingChar(testString3));
  console.log('6. Are "listen" and "silent" anagrams:', areAnagrams('listen', 'silent'));
  console.log('7. Compress "aabcccccaaa":', compressString(testString4));
  console.log('8. Longest common prefix of ["flower","flow","flight"]:', longestCommonPrefix(['flower', 'flow', 'flight']));
  console.log('9. Valid parentheses "()[]{}":', isValidParentheses('()[]{}'));
  console.log('10. String to int "123":', stringToInt('123'));
  console.log('11. Longest substring without repeating chars in "abcabcbb":', lengthOfLongestSubstring('abcabcbb'));
  console.log('12. Word count in "hello world":', wordCount(testString));
  console.log('13. Capitalize words in "hello world":', capitalizeWords(testString));
  console.log('14. Remove spaces from "hello world":', removeSpaces(testString));
  console.log('15. Is "erbottlewat" rotation of "waterbottle":', isRotation('erbottlewat', 'waterbottle'));
  
  console.log('');
  console.log('✅ Strings practice completed!');
  console.log('💡 Implement each function from scratch');
  console.log('🔧 Use console.log for debugging');
}

