import Model from '../models/model.js';

const taskTypeModel = new Model('TaskType');
export const taskTypePage = async (req, res) => {
    try {
        const data = await taskTypeModel.select('*');
        console.log(data.rows);
        res.status(200).json({
            taskType: data
        });
    } catch (err) {
        res.status(200).json({
            taskType: err.stack
        });
    }
};
export const taskTypeSoloPage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await taskTypeModel.selectById('*', id);
        console.log(data.rows);
        res.status(200).json({
            taskType: data
        });
    } catch (err) {
        res.status(200).json({
            taskType: err.stack
        });
    }
};
export const taskTypeDelete = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await taskTypeModel.deleteById(id);
        console.log(data.rows);
        res.status(200).json({
            taskType: data
        });
    } catch (err) {
        res.status(200).json({
            taskType: err.stack
        });
    }
};