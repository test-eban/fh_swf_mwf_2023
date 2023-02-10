import express from 'express';
import { indexPage, testPage } from '../controllers/home.js';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/test', testPage);

export default indexRouter;
