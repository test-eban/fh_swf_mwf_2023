import express from 'express';
import { taskPage, taskSoloPage, taskDelete, taskTypePage, taskTypeSoloPage, taskTypeDelete, branchPage, branchSoloPage, branchDelete } from '../controllers/index.js';

const router = express.Router();

// tasks
router.get('/tasks', taskPage);
router.get('/tasks/:id', taskSoloPage);
router.delete('/tasks/:id', taskDelete);

// tasktypes
router.get('/tasktypes', taskTypePage);
router.get('/tasktypes/:id', taskTypeSoloPage);
router.delete('/tasktypes/:id', taskTypeDelete);

// branches
router.get('/branches', branchPage);
router.get('/branches/:id', branchSoloPage);
router.delete('/branches/:id', branchDelete);

export default router;
