const common = {
    watchPathIgnorePatterns: [
        '/node_modules/',
        '/.routify/',
        '/build/',
        '/temp/',
        '/output/',
    ],
    moduleNameMapper: {
        '^#lib(.+)$': '<rootDir>lib$1',
        '^#root(.+)$': '<rootDir>$1',
    },
    testTimeout: 2000,
    modulePaths: ['<rootDir>'],
    roots: ['<rootDir>'],
}

export default {
    ...common,
    projects: [
        {
            ...common,
            displayName: 'unit',
            testEnvironment: 'node',
            testMatch: [
                '**/test/unit/**/?(*.)+(spec|test).[jt]s?(x)',
                '**/lib/**/?(*.)+(spec|test).[jt]s?(x)',
            ],
        },
        {
            ...common,
            displayName: 'integration',
            testEnvironment: 'node',
            testMatch: ['**/test/integration/**/?(*.)+(spec|test).[jt]s?(x)'],
        },
        {
            ...common,
            displayName: 'e2e',
            moduleNameMapper: {
                '^#lib(.+)$': '<rootDir>/lib$1',
            },
            testMatch: ['**/test/e2e/**/?(*.)+(spec|test).[jt]s?(x)'],
            preset: 'jest-playwright-preset',
            globalSetup: './test/e2e/setup-runtime.mjs',
            globalTeardown: './test/e2e/teardown-runtime.js',
        },
    ],
}