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
export const taskTypeSetArchieve = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const state = Number(req.params.state);

        const data = await taskTypeModel.setArchievedState(id, state);
        res.status(200).json({
            branch: data
        });
    } catch (err) {
        res.status(200).json({
            branch: err.stack
        });
    }
};

export const taskTypeUpdateRecord = async (req, res) => {
    const id = Number(req.params.id);
    const sqlParams = [];
    const sqlValues = [];

    Object.entries(req.body).forEach(([key, value]) => {
        const escapedKey = pool.escapeId(key);
        sqlParams.push(`${escapedKey} = ?`);
        sqlValues.push(value);
        // check if the ids are within the allowed-list that is specifically designed for each type each
    });
    try {
        let data = '';
        if (sqlValues.length > 0 && sqlParams !== undefined) {
            data = await taskTypeModel.updateRecord(id, sqlParams, sqlValues);
        }

        res.status(200).json({
            branch: data
        });
    } catch (error) {
        res.status(200).json({
            branch: error.stack
        });
    }
}