module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",  // Transform JS, JSX, TS, TSX files using Babel
    },
    transformIgnorePatterns: [
      // Allow transforming specific packages in node_modules
      "/node_modules/(?!react-router-dom|styled-components|lodash-es).+\\.js$",
    ],
    testEnvironment: "jsdom", // Necessary for React testing
    moduleNameMapper: {
        // Mock CSS imports
        '\\.(css|less)$': 'identity-obj-proxy', // This mock will make Jest ignore the actual CSS contents
    
        // Mock image imports (e.g., PNG, JPEG, etc.)
        '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
      }
  };
  