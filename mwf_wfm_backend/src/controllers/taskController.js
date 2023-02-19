import Model from '../models/model.js';

const tasksModel = new Model('Task');

// required for bigInt to JSON conversions
BigInt.prototype.toJSON = function () {
    return this.toString()
}


export const taskPage = async (req, res) => {
    try {
        const data = await tasksModel.select('*');
        console.log(data.rows);
        res.status(200).json({
            messages: data
        });
    } catch (err) {
        res.status(200).json({
            messages: err.stack
        });
    }
};
export const taskSoloPage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await tasksModel.selectById('*', id);
        console.log(data.rows);
        res.status(200).json({
            messages: data
        });
    } catch (err) {
        res.status(200).json({
            messages: err.stack
        });
    }
};
export const taskDelete = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await tasksModel.deleteById(id);
        console.log(data.rows);
        res.status(200).json({
            messages: data
        });
    } catch (err) {
        res.status(200).json({
            messages: err.stack
        });
    }
};