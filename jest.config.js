module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/types.ts'
  ],
  // setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
}