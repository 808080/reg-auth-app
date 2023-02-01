export default {
  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/client/src/components/**/*.{ts,tsx}'],
  roots: ['<rootDir>/packages/client/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^components': '<rootDir>/packages/client/src/components',
  },
};