import Model from '../models/model.js';

const branchesModel = new Model('Branch');
export const branchPage = async (req, res) => {
    try {
        const data = await branchesModel.select('*');
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
export const branchSoloPage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await branchesModel.selectById('*', id);
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
export const branchDelete = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await branchesModel.deleteById(id);
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