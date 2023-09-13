module.exports = { 
    preset: 'ts-jest',
    testEnviroment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['src/test/test.spec.ts'],
};