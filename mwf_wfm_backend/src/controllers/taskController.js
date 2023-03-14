import Model from '../models/model.js';
import { pool } from '../models/pool.js';

const taskModel = new Model('Task');

// required for bigInt to JSON conversions
BigInt.prototype.toJSON = function () {
    return this.toString()
};

export const taskPage = async (req, res) => {
    try {
        const data = await taskModel.select('*');
        console.log(data.rows);
        res.status(200).json({
            task: data
        });
    } catch (err) {
        res.status(200).json({
            task: err.stack
        });
    }
};
export const taskSoloPage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await taskModel.selectById('*', id);
        console.log(data.rows);
        res.status(200).json({
            task: data
        });
    } catch (err) {
        res.status(200).json({
            task: err.stack
        });
    }
};
export const taskDelete = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await taskModel.deleteById(id);
        console.log(data.rows);
        res.status(200).json({
            task: data
        });
    } catch (err) {
        res.status(200).json({
            task: err.stack
        });
    }
};
export const taskUpdateRecord = async (req, res) => {
    const id = Number(req.params.id);
    const sqlParams = [];
    const sqlValues = [];
    
    Object.entries(req.body).forEach(([key, value]) => {
        const escapedKey = pool.escapeId(key);
        sqlParams.push(`${escapedKey} = ?`);
        sqlValues.push(value);
    });
    try {
        let data = '';
        if (sqlValues.length > 0 && sqlParams !== undefined) {
            data = await taskModel.updateRecord(id, sqlParams, sqlValues);
        }

        res.status(200).json({
            task: data
        });
    } catch (error) {
        res.status(200).json({
            task: error.stack
        });
    }
};
export const taskInsertRecord = async (req, res) => {
    const sqlParams = [];
    const sqlValues = [];

    console.debug(req.body);
    Object.entries(req.body).forEach(([key, value]) => {
        if (key !== 'id') { // filter out id
            const escapedKey = pool.escapeId(key);
            sqlParams.push(`${escapedKey}`);
            sqlValues.push(value);
        }
    });
    try {
        let data = '';
        if (sqlValues.length > 0 && sqlParams !== undefined) {
            data = await taskModel.insertRecord(sqlParams, sqlValues);
            console.log(data);
        }
        res.status(200).json({
            task: data
        });
    } catch (error) {
        console.log("Error while inserting Task:" + error);
        res.status(200).json({
            task: error.stack
        });
    }
};