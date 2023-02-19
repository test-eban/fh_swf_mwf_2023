import { pool } from '../models/pool.js';
import {
    createBranchesTable,
    createTaskTable,
    createTaskTypeTable,
    createUsersTable,
    dropBranchTable,
    dropTaskTable,
    dropTaskTypeTable,
    dropUsersTable,
    modifyExistingTables,
    insertValues
} from './queries.js';

export const executeQueryArray = async arr => new Promise(resolve => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
        pool.query(q);
        if (index + 1 === stop) resolve();
    });
});

export const dropTables = () => executeQueryArray([dropTaskTable, dropBranchTable, dropTaskTypeTable, dropUsersTable]);
export const createTables = () => executeQueryArray([createBranchesTable, createTaskTable, createTaskTypeTable, createUsersTable]);
export const modifyTables = () => executeQueryArray(modifyExistingTables);
export const insertTables = () => executeQueryArray(insertValues);

export function sqlIsClean(sqlQuery) {
    const onlyLettersPattern = /^[A-Za-z]+$/;
    return sqlQuery.match(onlyLettersPattern);
}