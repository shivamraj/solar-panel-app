export default {
    type: 'module',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'ts-jest',
      },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    // Treat test files as ES modules
  };