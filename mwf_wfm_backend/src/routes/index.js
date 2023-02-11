import express from 'express';
import { indexPage, testPage, messagesPage } from '../controllers/index.js';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/test', testPage);
indexRouter.get('/messages', messagesPage);

export default indexRouter;
