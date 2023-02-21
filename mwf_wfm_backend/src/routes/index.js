import express from 'express';
import { taskPage, taskSoloPage, taskDelete, taskTypePage, taskTypeSoloPage, taskTypeDelete, branchPage, branchSoloPage, branchDelete, branchSetArchieve, taskTypeSetArchieve, taskSetArchieve, taskUpdateRecord } from '../controllers/index.js';

const router = express.Router();

// tasks
router.get('/tasks', taskPage);
router.get('/tasks/:id', taskSoloPage);
router.post('/tasks/a/:id/:state', taskSetArchieve);
router.post('/tasks/update/:id', taskUpdateRecord);
router.delete('/tasks/:id', taskDelete);

// tasktypes
router.get('/tasktypes', taskTypePage);
router.get('/tasktypes/:id', taskTypeSoloPage);
router.post('/tasktypes/a/:id/:state', taskTypeSetArchieve);
router.delete('/tasktypes/:id', taskTypeDelete);

// branches
router.get('/branches', branchPage);
router.get('/branches/:id', branchSoloPage);
router.post('/branches/a/:id/:state', branchSetArchieve);
router.delete('/branches/:id', branchDelete);

export default router;
