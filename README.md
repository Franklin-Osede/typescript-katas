# TypeScript Katas - Advanced Programming Challenges

## 🎯 Overview

TypeScript Katas is a comprehensive programming challenge system designed for developers who want to master advanced TypeScript concepts. It provides 100+ real-world code smells, debugging scenarios, and algorithmic challenges that enhance your programming skills through hands-on practice and collaborative coding sessions.

## 🏗️ Architecture

The system uses a structured approach with the following key components:

**Code Smells Detection**: 100+ common bugs organized in 10 groups (1-10, 11-20, ..., 91-100)
**Test-Driven Development**: Empty test files for you to write comprehensive test suites
**Debugging Practice**: Real-world scenarios with memory leaks, race conditions, and performance issues
**Algorithm Challenges**: From basic arrays to advanced data structures and complex algorithms
**Mock Interview Scenarios**: Simulated interview problems with time constraints

## 🚀 Key Features

### Real-world Code Smells
- **Memory Leaks**: Event listeners, timers, closures, and circular references
- **Race Conditions**: Concurrent access, async/await issues, and promise mishandling
- **Performance Issues**: Infinite loops, stack overflow, and inefficient algorithms
- **Type Safety**: Null pointers, undefined behavior, and type coercion problems
- **Prototype Pollution**: Global object modifications and prototype misuse

### Interview-Ready Practice
- **Pair Programming**: Simulated collaborative coding sessions
- **Live Debugging**: Console.log, breakpoints, and step-through debugging
- **Time Pressure**: Realistic interview time constraints
- **Code Review**: Best practices and clean code principles
- **System Design**: Scalable architecture and design patterns

### Comprehensive Coverage
- **Arrays & Strings**: Manipulation, searching, and optimization
- **Objects & Data Structures**: Hash maps, trees, graphs, and heaps
- **Algorithms**: Sorting, searching, dynamic programming, and recursion
- **Async Programming**: Promises, async/await, and error handling
- **Testing**: Unit tests, integration tests, and edge cases

## 🛠️ Technology Stack

- **Language**: TypeScript 5.x
- **Testing**: Jest with comprehensive test coverage
- **Build Tool**: npm with TypeScript compiler
- **Code Quality**: ESLint and Prettier ready
- **Debugging**: Built-in VS Code debugging support
- **Documentation**: JSDoc comments and inline examples

## 📦 Prerequisites

- Node.js 18+ or higher
- npm 9+ or yarn
- TypeScript 5.x
- VS Code (recommended) with TypeScript extensions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development
```bash
# Run the main application
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### 3. Practice Code Smells
The application will automatically:

- Load all 100 code smells organized by difficulty
- Display debugging scenarios in the console
- Provide empty test files for you to implement
- Show progress through different challenge groups

### 4. Manual Testing
```bash
# Run specific test groups
npm test -- --testPathPattern="group-1-10"
npm test -- --testPathPattern="group-11-20"

# Run with coverage
npm test -- --coverage

# Debug specific code smell
npm run dev -- --debug smell1-memory-leak
```

## 📁 Project Structure

```
src/
├── code-smells-tests/           # 100+ code smells organized in groups
│   ├── group-1-10/             # Basic bugs (memory leaks, infinite loops)
│   ├── group-11-20/            # Intermediate bugs (race conditions, mutations)
│   ├── group-21-30/            # Advanced issues (performance, async)
│   ├── group-31-40/            # Complex bugs (scope, type errors)
│   ├── group-41-50/            # Prototype misuse scenarios
│   ├── group-51-60/            # Method misuse patterns
│   ├── group-61-70/            # Array/object prototype issues
│   ├── group-71-80/            # Function prototype problems
│   ├── group-81-90/            # String prototype issues
│   └── group-91-100/           # Number/boolean prototype problems
├── exercises/                  # Algorithm and data structure challenges
│   ├── arrays.ts              # Array manipulation exercises
│   ├── strings.ts             # String processing challenges
│   ├── objects.ts             # Object-oriented programming
│   ├── data-structures.ts     # Hash maps, trees, graphs
│   ├── algorithms.ts           # Sorting, searching, DP
│   └── advanced.ts             # Complex algorithmic problems
├── practice-exercises/         # Empty files for your implementations
├── debugging/                  # Debugging scenarios and techniques
└── utils/                      # Helper functions and mock data
```

## 🎯 Learning Strategy

### Week 1: Foundation
- **Days 1-2**: Groups 1-20 (Basic code smells and debugging)
- **Days 3-4**: Groups 21-40 (Intermediate problems and algorithms)
- **Days 5-7**: Groups 41-60 (Advanced scenarios and system design)

### Week 2: Mastery
- **Days 8-10**: Groups 61-80 (Complex debugging and optimization)
- **Days 11-12**: Groups 81-100 (Expert-level challenges)
- **Days 13-14**: Advanced challenges and final review

### Daily Practice Routine
1. **Morning**: 2-3 code smells (30 minutes)
2. **Afternoon**: 1 algorithm challenge (45 minutes)
3. **Evening**: Write tests and debug (30 minutes)
4. **Review**: Document learnings and patterns (15 minutes)

## 🔧 Advanced Usage

### Custom Test Configuration
```typescript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!src/**/*.d.ts'
  ]
};
```

### Debugging Setup
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug TypeScript Katas",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "runtimeArgs": ["-r", "ts-node/register"]
    }
  ]
}
```

## 📊 Progress Tracking

### Code Smells Mastery
- ✅ **Group 1-10**: Basic debugging (memory leaks, infinite loops)
- ✅ **Group 11-20**: Intermediate issues (race conditions, mutations)
- ✅ **Group 21-30**: Advanced problems (performance, async/await)
- ✅ **Group 31-40**: Complex bugs (scope issues, type errors)
- ✅ **Group 41-50**: Prototype misuse scenarios
- ✅ **Group 51-60**: Method misuse patterns
- ✅ **Group 61-70**: Array/object prototype issues
- ✅ **Group 71-80**: Function prototype problems
- ✅ **Group 81-90**: String prototype issues
- ✅ **Group 91-100**: Number/boolean prototype problems

### Skills Assessment
- **Debugging**: Console.log, breakpoints, step-through
- **Testing**: Unit tests, edge cases, error handling
- **Algorithms**: Time/space complexity, optimization
- **System Design**: Architecture, scalability, patterns
- **Code Quality**: Clean code, best practices, refactoring

## 🤝 Contributing

This project is designed for personal programming skill development. Feel free to:

- Add new code smells and scenarios
- Improve existing test cases
- Share debugging techniques
- Document solutions and patterns

## 📚 Resources

- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Jest Testing**: https://jestjs.io/docs/getting-started
- **Algorithm Practice**: https://leetcode.com, https://hackerrank.com
- **System Design**: https://github.com/donnemartin/system-design-primer

## 🎉 Success Metrics

After completing this program, you should be able to:

- **Debug** any JavaScript/TypeScript code in under 10 minutes
- **Write** comprehensive test suites for complex functions
- **Solve** algorithmic problems with optimal time/space complexity
- **Design** scalable systems and explain trade-offs
- **Communicate** technical concepts clearly in collaborative environments

---

**Ready to master advanced TypeScript programming? Start with `npm run dev` and begin your journey to programming excellence!** 🚀