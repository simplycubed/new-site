module.exports = {
  projects: ["<rootDir>/*/functions/jest.config.ts"],
  testPathIgnorePatterns: [
    ".*/bin/",
    ".*/lib/",
    // Ignoring otherwise tests duplicate due to Jest `projects`
    ".*/__tests__/.*.ts",
  ],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/test-data/**",
  ],
  maxConcurrency: 10,
};
