# TypeScript Katas – Programming Practice Repository

TypeScript programming practice repository with code smells, debugging scenarios, and algorithmic challenges. Work in progress.

**TypeScript** **Jest** **Node.js** **Algorithms** **Debugging**

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [License](#license)

## Overview

TypeScript Katas is a work-in-progress repository for practicing TypeScript programming skills. It includes code smells, debugging exercises, and algorithmic challenges for interview preparation and skill development.

### Features

- Code smells organized in groups (1-10, 11-20, ..., 91-100)
- Debugging exercises (memory leaks, race conditions, performance issues)
- Algorithm challenges (arrays, strings, objects, data structures)
- Exercises available in English and Spanish

### Technology Stack

- TypeScript 5.x
- Node.js 18+
- Jest for testing
- ESLint and Prettier for code quality

## Project Structure

```
src/
├── code-smells/              # Code smell implementations
├── code-smells-tests/        # Test files organized by groups
│   ├── group-1-10/
│   ├── group-11-20/
│   └── ... (groups 21-100)
├── exercises/                # Algorithm challenges
│   ├── arrays.ts
│   ├── strings.ts
│   ├── objects.ts
│   ├── data-structures.ts
│   ├── algorithms.ts
│   └── advanced.ts
├── ejercicios/              # Spanish version
├── debugging/               # Debugging scenarios
├── practice/                # Practice utilities
└── utils/                   # Helper functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- TypeScript 5.x

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd typescript-katas

# Install dependencies
npm install
```

### Quick Start

```bash
# Run code smells practice
npm run dev

# Run tests
npm test

# Build
npm run build
```

## Development

### Working on Code Smells

Each code smell file contains a buggy implementation with TODO comments. Workflow:

1. Open a code smell file (e.g., `src/code-smells-tests/group-1-10/smell1-memory-leak.ts`)
2. Identify the bug
3. Write tests
4. Fix the implementation
5. Verify with tests

### Working on Exercises

Exercises are in `src/exercises/` and `src/ejercicios/` (Spanish version).

Example:
```typescript
// src/exercises/arrays.ts
export function sumArray(numbers: number[]): number {
  // TODO: Implement here
  return 0;
}
```

Workflow:
1. Read the exercise description
2. Implement the function
3. Test with console.log
4. Consider edge cases
5. Write unit tests

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test group
npm test -- --testPathPattern="group-1-10"
```

Test files should be placed alongside source files or in the `tests/` directory.

## Contributing

This is a work-in-progress project for personal skill development. Contributions welcome:

- Adding new code smells
- Improving tests
- Fixing bugs
- Adding new exercises

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

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Algorithm Practice](https://leetcode.com)
