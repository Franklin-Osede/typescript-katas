/**
 * DEBUGGING EXERCISES - STRINGS
 * 
 * Instructions:
 * 1. Each function has intentional bugs
 * 2. Find the bug using console.log and breakpoints
 * 3. Fix the bug
 * 4. Explain what was wrong
 */

/**
 * DEBUG 1: Valid Parentheses with bug
 * This function should check balanced parentheses, but has a bug
 */
export function isValidParenthesesBuggy(s: string): boolean {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

/**
 * DEBUG 2: Longest Substring with bug
 * This function should find longest substring without repeating chars, but has a bug
 */
export function lengthOfLongestSubstringBuggy(s: string): number {
  const seen = new Set<string>();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

/**
 * DEBUG 3: Valid Anagram with bug
 * This function should check anagrams, but has a bug
 */
export function isAnagramBuggy(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const count: { [key: string]: number } = {};
  
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }
  
  for (let key in count) {
    if (count[key] !== 0) {
      return false;
    }
  }
  
  return true;
}

/**
 * DEBUG 4: Group Anagrams with bug
 * This function should group anagrams, but has a bug
 */
export function groupAnagramsBuggy(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};
  
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
  }
  
  return Object.values(map);
}

/**
 * DEBUG 5: Longest Common Prefix with bug
 * This function should find common prefix, but has a bug
 */
export function longestCommonPrefixBuggy(strs: string[]): string {
  if (strs.length === 0) return '';
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }
  
  return prefix;
}

/**
 * DEBUG 6: Valid Palindrome with bug
 * This function should check palindrome, but has a bug
 */
export function isPalindromeBuggy(s: string): boolean {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

/**
 * DEBUG 7: String to Integer with bug
 * This function should convert string to int, but has a bug
 */
export function myAtoiBuggy(s: string): number {
  let i = 0;
  let sign = 1;
  let result = 0;
  
  // Skip whitespace
  while (i < s.length && s[i] === ' ') {
    i++;
  }
  
  // Check sign
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }
  
  // Convert digits
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
    i++;
  }
  
  return sign * result;
}

/**
 * DEBUG 8: Reverse Words with bug
 * This function should reverse words, but has a bug
 */
export function reverseWordsBuggy(s: string): string {
  const words = s.trim().split(/\s+/);
  return words.reverse().join(' ');
}

/**
 * Function to test debugging
 * Use this function to test your debugging skills
 */
export function testDebuggingStrings() {
  console.log('=== TESTING STRING DEBUGGING ===\n');
  
  // Debug 1
  console.log('DEBUG 1 - Valid Parentheses with bug:');
  console.log('isValidParenthesesBuggy("()"):', isValidParenthesesBuggy("()"));
  console.log('isValidParenthesesBuggy("()[]{}"):', isValidParenthesesBuggy("()[]{}"));
  console.log('isValidParenthesesBuggy("(]"):', isValidParenthesesBuggy("(]"));
  console.log('');
  
  // Debug 2
  console.log('DEBUG 2 - Longest Substring with bug:');
  console.log('lengthOfLongestSubstringBuggy("abcabcbb"):', lengthOfLongestSubstringBuggy("abcabcbb"));
  console.log('lengthOfLongestSubstringBuggy("bbbbb"):', lengthOfLongestSubstringBuggy("bbbbb"));
  console.log('');
  
  // Debug 3
  console.log('DEBUG 3 - Valid Anagram with bug:');
  console.log('isAnagramBuggy("anagram", "nagaram"):', isAnagramBuggy("anagram", "nagaram"));
  console.log('isAnagramBuggy("rat", "car"):', isAnagramBuggy("rat", "car"));
  console.log('');
  
  // Debug 4
  console.log('DEBUG 4 - Group Anagrams with bug:');
  console.log('groupAnagramsBuggy(["eat","tea","tan","ate","nat","bat"]):', groupAnagramsBuggy(["eat","tea","tan","ate","nat","bat"]));
  console.log('');
  
  // Debug 5
  console.log('DEBUG 5 - Longest Common Prefix with bug:');
  console.log('longestCommonPrefixBuggy(["flower","flow","flight"]):', longestCommonPrefixBuggy(["flower","flow","flight"]));
  console.log('longestCommonPrefixBuggy(["dog","racecar","car"]):', longestCommonPrefixBuggy(["dog","racecar","car"]));
  console.log('');
  
  // Debug 6
  console.log('DEBUG 6 - Valid Palindrome with bug:');
  console.log('isPalindromeBuggy("A man, a plan, a canal: Panama"):', isPalindromeBuggy("A man, a plan, a canal: Panama"));
  console.log('isPalindromeBuggy("race a car"):', isPalindromeBuggy("race a car"));
  console.log('');
  
  // Debug 7
  console.log('DEBUG 7 - String to Integer with bug:');
  console.log('myAtoiBuggy("42"):', myAtoiBuggy("42"));
  console.log('myAtoiBuggy("   -42"):', myAtoiBuggy("   -42"));
  console.log('myAtoiBuggy("4193 with words"):', myAtoiBuggy("4193 with words"));
  console.log('');
  
  // Debug 8
  console.log('DEBUG 8 - Reverse Words with bug:');
  console.log('reverseWordsBuggy("the sky is blue"):', reverseWordsBuggy("the sky is blue"));
  console.log('reverseWordsBuggy("  hello world  "):', reverseWordsBuggy("  hello world  "));
  console.log('');
}