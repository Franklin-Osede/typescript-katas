/**
 * DATA STRUCTURE EXERCISES - COMMON IN INTERVIEWS
 * 
 * Instructions:
 * 1. Implement each data structure
 * 2. Use console.log for debugging
 * 3. Think about edge cases
 * 4. Consider time complexity
 */

/**
 * EXERCISE 1: Implement Stack
 * Implement a stack with push, pop, top, and getMin operations
 */
export class Stack {
  // TODO: Implement here
  // Methods: push(), pop(), top(), isEmpty(), size()
}

/**
 * EXERCISE 2: Implement Queue
 * Implement a queue with enqueue, dequeue, front operations
 */
export class Queue {
  // TODO: Implement here
  // Methods: enqueue(), dequeue(), front(), isEmpty(), size()
}

/**
 * EXERCISE 3: Implement Deque
 * Implement a double-ended queue
 */
export class Deque {
  // TODO: Implement here
  // Methods: addFront(), addRear(), removeFront(), removeRear(), isEmpty()
}

/**
 * EXERCISE 4: Implement Linked List
 * Implement a singly linked list
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export class LinkedList {
  // TODO: Implement here
  // Methods: addAtHead(), addAtTail(), addAtIndex(), deleteAtIndex(), get()
}

/**
 * EXERCISE 5: Implement Binary Tree
 * Implement a binary tree with basic operations
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

export class BinaryTree {
  // TODO: Implement here
  // Methods: insert(), search(), delete(), traverse()
}

/**
 * EXERCISE 6: Implement Trie
 * Implement a trie (prefix tree) for string operations
 */
export class Trie {
  // TODO: Implement here
  // Methods: insert(), search(), startsWith(), delete()
}

/**
 * EXERCISE 7: Implement Union-Find
 * Implement Union-Find data structure for disjoint sets
 */
export class UnionFind {
  // TODO: Implement here
  // Methods: find(), union(), connected(), count()
}

/**
 * EXERCISE 8: Implement Segment Tree
 * Implement a segment tree for range queries
 */
export class SegmentTree {
  // TODO: Implement here
  // Methods: build(), query(), update()
}

/**
 * EXERCISE 9: Implement Fenwick Tree (Binary Indexed Tree)
 * Implement a Fenwick tree for prefix sums
 */
export class FenwickTree {
  // TODO: Implement here
  // Methods: update(), query(), rangeQuery()
}

/**
 * EXERCISE 10: Implement Disjoint Set Union
 * Implement DSU with path compression and union by rank
 */
export class DSU {
  // TODO: Implement here
  // Methods: find(), union(), connected(), getSize()
}