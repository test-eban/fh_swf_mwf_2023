import express from 'express';
import {
    taskPage, taskSoloPage, taskDelete, taskInsertRecord, taskUpdateRecord,
    taskTypePage, taskTypeSoloPage, taskTypeDelete, taskTypeSetArchieve, taskTypeUpdateRecord,
    branchPage, branchSoloPage, branchDelete, branchSetArchieve, branchUpdateRecord
} from '../controllers/index.js';

const router = express.Router();

// tasks
router.get('/tasks', taskPage);
router.get('/tasks/:id', taskSoloPage);
router.post('/tasks/:id/update', taskUpdateRecord);
router.post('/tasks/insert', taskInsertRecord);
router.delete('/tasks/:id/delete', taskDelete);

// tasktypes
router.get('/tasktypes', taskTypePage);
router.get('/tasktypes/:id', taskTypeSoloPage);
router.post('/tasktypes/:id/a/:state', taskTypeSetArchieve);
router.post('/tasktypes/:id/update', taskTypeUpdateRecord);
router.delete('/tasktypes/:id/delete', taskTypeDelete);

// branches
router.get('/branches', branchPage);
router.get('/branches/:id', branchSoloPage);
router.post('/branches/:id/a/:state', branchSetArchieve);
router.post('/branches/:id/update', branchUpdateRecord);
router.delete('/branches/:id/delete', branchDelete);

export default router;
