import { testEnvironmentVariable, testVariable } from '../settings.js';

export const indexPage = (req, res) => res.status(200).json({
    message: testEnvironmentVariable
});

export const testPage = (req, res) => res.status(200).json({
    message: testVariable
});