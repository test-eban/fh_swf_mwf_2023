import Model from '../models/model.js';
import { pool } from '../models/pool.js';

const branchModel = new Model('Branch');
export const branchPage = async (req, res) => {
    try {
        const data = await branchModel.select('*');
        console.log(data.rows);
        res.status(200).json({
            branch: data
        });
    } catch (err) {
        res.status(200).json({
            branch: err.stack
        });
    }
};
export const branchSoloPage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await branchModel.selectById('*', id);
        console.log(data.rows);
        res.status(200).json({
            branch: data
        });
    } catch (err) {
        res.status(200).json({
            branch: err.stack
        });
    }
};
export const branchDelete = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await branchModel.deleteById(id);
        console.log(data.rows);
        res.status(200).json({
            branch: data
        });
    } catch (err) {
        res.status(200).json({
            branch: err.stack
        });
    }
};
export const branchSetArchieve = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const state = Number(req.params.state);

        const data = await branchModel.setArchievedState(id, state);
        res.status(200).json({
            branch: data
        });
    } catch (err) {
        res.status(200).json({
            branch: err.stack
        });
    }
};
export const branchUpdateRecord = async (req, res) => {
    const id = Number(req.params.id);
    const sqlParams = [];
    const sqlValues = [];

    Object.entries(req.body).forEach(([key, value]) => {
        const escapedKey = pool.escapeId(key);
        sqlParams.push(`${escapedKey} = ?`);
        sqlValues.push(value);
        // check if the ids are within the allowed-list
        // that is specifically designed for each type each
    });
    try {
        let data = '';
        if (sqlValues.length > 0 && sqlParams !== undefined) {
            data = await branchModel.updateRecord(id, sqlParams, sqlValues);
        }

        res.status(200).json({
            branch: data
        });
    } catch (error) {
        res.status(200).json({
            branch: error.stack
        });
    }
};
