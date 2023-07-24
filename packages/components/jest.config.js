module.exports = {
  roots: ["<rootDir>"],
  collectCoverage: true,
  testMatch: [
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  collectCoverageFrom: ["src/**/*.tsx","!src/**/*.stories.tsx"],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  verbose: true,
};
