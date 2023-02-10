import express from 'express';
import { testEnvironmentVariable } from '../settings.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

export default indexRouter;
