# TypeScript Katas – Programming Practice Repository

Comprehensive TypeScript programming practice system featuring 100+ code smells, debugging scenarios, algorithmic challenges, and interview preparation exercises.

**TypeScript** **Jest** **Node.js** **Algorithms** **Debugging**

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Code Smells Practice](#code-smells-practice)
- [Exercises](#exercises)
- [Debugging](#debugging)
- [Contributing](#contributing)
- [License](#license)

## Overview

TypeScript Katas is a production-ready programming practice repository designed for developers preparing for technical interviews and seeking to master advanced TypeScript concepts. The system provides hands-on experience with real-world bugs, algorithmic challenges, and debugging scenarios through structured exercises and test-driven development.

### Key Features

- **100+ Code Smells**: Common bugs organized in 10 groups (1-10, 11-20, ..., 91-100)
- **Test-Driven Development**: Empty test files for comprehensive test suite implementation
- **Debugging Practice**: Real-world scenarios including memory leaks, race conditions, and performance issues
- **Algorithm Challenges**: From basic arrays to advanced data structures and complex algorithms
- **Mock Interview Scenarios**: Simulated interview problems with time constraints
- **Bilingual Support**: Exercises available in both English and Spanish
- **Type Safety**: Full TypeScript strict mode with comprehensive type definitions

### Code Smells Categories

- **Memory Leaks**: Event listeners, timers, closures, and circular references
- **Race Conditions**: Concurrent access, async/await issues, and promise mishandling
- **Performance Issues**: Infinite loops, stack overflow, and inefficient algorithms
- **Type Safety**: Null pointers, undefined behavior, and type coercion problems
- **Prototype Pollution**: Global object modifications and prototype misuse
- **Async Programming**: Promise chains, async/await patterns, and error handling

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    TypeScript Katas                          │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Code Smells  │  │  Exercises   │  │  Debugging   │      │
│  │  (100+)      │  │  (Arrays,    │  │  Scenarios   │      │
│  │              │  │   Strings,   │  │              │      │
│  │              │  │   Objects)   │  │              │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                 │                  │              │
│  ┌──────┴─────────────────┴──────────────────┴──────┐      │
│  │            Test Infrastructure (Jest)             │      │
│  └──────────────────────────────────────────────────┘      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Algorithms  │  │ Data Struct. │  │ Mock Interview│      │
│  │              │  │              │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

**Language & Runtime:**
- TypeScript 5.x with strict mode
- Node.js 18+
- ES2020 target

**Testing & Quality:**
- Jest 29+ with ts-jest
- ESLint for code quality
- Prettier for code formatting

**Build Tools:**
- TypeScript Compiler (tsc)
- npm scripts for automation
- Source maps for debugging

## Project Structure

```
typescript-katas/
├── src/
│   ├── code-smells/              # 100+ code smell implementations
│   │   ├── smell1-memory-leak.ts
│   │   ├── smell2-infinite-loop.ts
│   │   └── ... (100 total)
│   │
│   ├── code-smells-tests/        # Test files organized by groups
│   │   ├── group-1-10/          # Basic bugs (memory leaks, infinite loops)
│   │   │   ├── smell1-memory-leak.ts
│   │   │   ├── smell2-infinite-loop.ts
│   │   │   └── ... (10 per group)
│   │   ├── group-11-20/         # Intermediate bugs (race conditions, mutations)
│   │   ├── group-21-30/         # Advanced issues (performance, async)
│   │   ├── group-31-40/         # Complex bugs (scope, type errors)
│   │   ├── group-41-50/         # Prototype misuse scenarios
│   │   ├── group-51-60/         # Method misuse patterns
│   │   ├── group-61-70/         # Array/object prototype issues
│   │   ├── group-71-80/         # Function prototype problems
│   │   ├── group-81-90/         # String prototype issues
│   │   └── group-91-100/        # Number/boolean prototype problems
│   │
│   ├── exercises/               # Algorithm and data structure challenges
│   │   ├── arrays.ts           # Array manipulation exercises
│   │   ├── strings.ts          # String processing challenges
│   │   ├── objects.ts          # Object-oriented programming
│   │   ├── data-structures.ts  # Hash maps, trees, graphs
│   │   ├── algorithms.ts       # Sorting, searching, DP
│   │   ├── advanced.ts         # Complex algorithmic problems
│   │   └── mock-interview.ts   # Interview simulation exercises
│   │
│   ├── ejercicios/             # Spanish version of exercises
│   │   ├── arrays.ts
│   │   ├── strings.ts
│   │   └── ... (mirrors exercises/)
│   │
│   ├── debugging/              # Debugging scenarios and techniques
│   │   ├── debug-arrays.ts
│   │   ├── debug-strings.ts
│   │   └── debug-objetos.ts
│   │
│   ├── practice/               # Practice utilities
│   │   └── code-smells-practice.ts
│   │
│   ├── practice-exercises/     # Empty files for implementations
│   │   ├── arrays/
│   │   └── strings/
│   │
│   ├── utils/                  # Helper functions and utilities
│   │   ├── helpers.ts
│   │   ├── logger.ts
│   │   └── mock-data.ts
│   │
│   ├── tests/                  # Test files
│   │   └── arrays.test.ts
│   │
│   └── index.ts                # Main entry point
│
├── dist/                       # Compiled JavaScript output
├── node_modules/               # Dependencies
├── jest.config.js              # Jest configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher (or yarn)
- **TypeScript**: v5.x (installed as dependency)
- **Git**: For version control
- **VS Code** (recommended): With TypeScript extensions for optimal development experience

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd typescript-katas

# Install dependencies
npm install

# Verify installation
npm run build
```

### Environment Setup

No environment variables are required for basic usage. The project is configured to work out of the box.

### Quick Start

```bash
# Run the main application (executes code smells practice)
npm run dev

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

## Development

### Running Code Smells Practice

The main entry point executes code smells practice automatically:

```bash
npm run dev
```

This will:
- Load all 100 code smells organized by difficulty
- Display debugging scenarios in the console
- Provide empty test files for implementation
- Show progress through different challenge groups

### Working on Code Smells

Each code smell file contains:
- A buggy implementation
- TODO comments indicating issues
- Debugging hints
- Expected behavior documentation

**Example workflow:**

1. Open a code smell file (e.g., `src/code-smells-tests/group-1-10/smell1-memory-leak.ts`)
2. Identify the bug using debugging techniques
3. Write tests in the corresponding test file
4. Fix the implementation
5. Verify with tests

### Working on Exercises

Exercises are located in `src/exercises/` and `src/ejercicios/` (Spanish version).

**Example: Array Exercises**

```typescript
// src/exercises/arrays.ts
export function sumArray(numbers: number[]): number {
  // TODO: Implement here
  return 0;
}
```

**Development workflow:**

1. Read the exercise description
2. Implement the function
3. Test with console.log for debugging
4. Consider edge cases (empty arrays, single element, etc.)
5. Optimize for time/space complexity
6. Write unit tests

### Debugging Setup

For VS Code debugging, create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug TypeScript Katas",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "runtimeArgs": ["-r", "ts-node/register"],
      "sourceMaps": true
    }
  ]
}
```

### Code Organization

- **Domain Logic**: Business rules and algorithms in exercise files
- **Test Files**: Comprehensive test suites for each exercise
- **Utilities**: Reusable helper functions in `utils/`
- **Practice**: Automated practice runners in `practice/`

## Testing

### Test Configuration

Tests are configured via `jest.config.js`:
- Test environment: Node.js
- TypeScript support via ts-jest
- Coverage collection enabled
- Test matching: `**/*.test.ts` and `**/*.spec.ts`

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test group
npm test -- --testPathPattern="group-1-10"

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- src/tests/arrays.test.ts
```

### Writing Tests

Test files should be placed alongside source files or in the `tests/` directory:

```typescript
// src/tests/arrays.test.ts
import { sumArray } from '../exercises/arrays';

describe('sumArray', () => {
  it('should sum all elements', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it('should return 0 for empty array', () => {
    expect(sumArray([])).toBe(0);
  });
});
```

### Test Coverage

Current coverage targets:
- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

## Code Smells Practice

### Group Organization

Code smells are organized into 10 groups of 10 exercises each:

- **Groups 1-10**: Basic debugging (memory leaks, infinite loops, null pointers)
- **Groups 11-20**: Intermediate issues (race conditions, mutations, type errors)
- **Groups 21-30**: Advanced problems (performance, async/await, recursion)
- **Groups 31-40**: Complex bugs (scope issues, type coercion, hoisting)
- **Groups 41-50**: Prototype misuse scenarios
- **Groups 51-60**: Method misuse patterns
- **Groups 61-70**: Array/object prototype issues
- **Groups 71-80**: Function prototype problems
- **Groups 81-90**: String prototype issues
- **Groups 91-100**: Number/boolean prototype problems

### Practice Strategy

**Week 1: Foundation**
- Days 1-2: Groups 1-20 (Basic code smells and debugging)
- Days 3-4: Groups 21-40 (Intermediate problems and algorithms)
- Days 5-7: Groups 41-60 (Advanced scenarios and system design)

**Week 2: Mastery**
- Days 8-10: Groups 61-80 (Complex debugging and optimization)
- Days 11-12: Groups 81-100 (Expert-level challenges)
- Days 13-14: Advanced challenges and final review

**Daily Practice Routine:**
1. Morning: 2-3 code smells (30 minutes)
2. Afternoon: 1 algorithm challenge (45 minutes)
3. Evening: Write tests and debug (30 minutes)
4. Review: Document learnings and patterns (15 minutes)

## Exercises

### Available Exercise Categories

**Arrays** (`src/exercises/arrays.ts`)
- Sum, max, min, average
- Filtering and mapping
- Searching and sorting
- Array manipulation

**Strings** (`src/exercises/strings.ts`)
- String manipulation
- Pattern matching
- Parsing and validation
- Encoding/decoding

**Objects** (`src/exercises/objects.ts`)
- Object manipulation
- Property access and modification
- Deep cloning and merging
- Object-oriented patterns

**Data Structures** (`src/exercises/data-structures.ts`)
- Hash maps and sets
- Trees and graphs
- Stacks and queues
- Heaps and priority queues

**Algorithms** (`src/exercises/algorithms.ts`)
- Sorting algorithms
- Searching algorithms
- Dynamic programming
- Recursion and backtracking

**Advanced** (`src/exercises/advanced.ts`)
- Complex algorithmic problems
- System design patterns
- Optimization challenges
- Performance tuning

**Mock Interview** (`src/exercises/mock-interview.ts`)
- Interview simulation exercises
- Time-constrained problems
- Pair programming scenarios
- Code review exercises

## Debugging

### Debugging Scenarios

The `src/debugging/` directory contains real-world debugging scenarios:

- **debug-arrays.ts**: Array manipulation bugs
- **debug-strings.ts**: String processing issues
- **debug-objetos.ts**: Object-related problems

### Debugging Techniques

1. **Console Logging**: Strategic console.log statements
2. **Breakpoints**: VS Code debugger integration
3. **Step-through**: Line-by-line execution
4. **Watch Expressions**: Monitor variable values
5. **Call Stack**: Trace execution flow

### Common Debugging Patterns

- Memory leak detection
- Race condition identification
- Performance bottleneck analysis
- Type error resolution
- Async/await debugging

## Contributing

This project is designed for personal programming skill development. Contributions are welcome:

1. **Adding New Code Smells**: Create new bug scenarios
2. **Improving Tests**: Enhance test coverage and quality
3. **Documentation**: Improve explanations and examples
4. **Bug Fixes**: Report and fix issues in exercises
5. **New Exercises**: Add algorithmic challenges

### Contribution Guidelines

- Follow TypeScript strict mode
- Write comprehensive tests
- Document complex logic
- Maintain code style consistency
- Update README if adding major features

## License

MIT License

Copyright (c) 2024 TypeScript Katas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Resources

- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Jest Documentation**: https://jestjs.io/docs/getting-started
- **Algorithm Practice**: https://leetcode.com, https://hackerrank.com
- **System Design**: https://github.com/donnemartin/system-design-primer
- **Clean Code**: https://github.com/ryanmcdermott/clean-code-javascript

## Success Metrics

After completing this program, you should be able to:

- Debug any JavaScript/TypeScript code efficiently
- Write comprehensive test suites for complex functions
- Solve algorithmic problems with optimal time/space complexity
- Design scalable systems and explain trade-offs
- Communicate technical concepts clearly in collaborative environments
- Identify and fix common code smells in production code
- Handle async programming patterns correctly
- Optimize code for performance and maintainability

---

