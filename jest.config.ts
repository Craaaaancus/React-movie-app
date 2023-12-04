import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.ts',
    '(assets|models|services)': '<rootDir>/src/__mocks__/fileMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jest-environment-jsdom',
};

export default config;
