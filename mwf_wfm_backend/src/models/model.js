import { pool } from './pool.js';

class Model {
    constructor(table) {
        this.pool = pool;
        this.table = table;
        this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
    }

    async select(columns, clause) {
        let query = `SELECT ${columns} FROM ${this.table}`;
        if (clause) query += clause;
        return this.pool.query(query);
    }

    async selectById(columns, id) {
        const query = `SELECT ${columns} FROM ${this.table} WHERE id = ?`;
        return this.pool.query(query, id);
    }

    async complexSelect(columns, clause, from) {
        let query = `SELECT ${columns} FROM ${from}`;
        if (clause) query += clause;
        return this.pool.query(query);
    }

    async update(columns) {
        const query = `UPDATE ${this.table} SET ${columns}`;
        this.setUpdatedOn(id);
        return this.pool.query(query);
    }

    async deleteById(id) {
        const query = `DELETE FROM ${this.table} WHERE id = ? `;
        return this.pool.query(query, id);
    }

    async setArchievedState(id, state) {
        const value = (state % 2 === 1);
        const query = `UPDATE ${this.table} SET archived = ? WHERE id = ?`;
        this.setUpdatedOn(id);
        return this.pool.query(query, [ value, id ]);
    }

    async setUpdatedOn(id) {
        const value = (new Date()).toISOString().slice(0, 19).replace(/-/g, "-").replace("T", " ");
        const query = `UPDATE ${this.table} SET updatedOn = ? WHERE id = ?`;
        return this.pool.query(query, [value, id]);
    }

    async updateRecord(id, sqlParams, sqlValues) {
        const sqlQuery = `UPDATE ${this.table} SET ${sqlParams.join(", ")} WHERE id = ?`;
        sqlValues.push(id);

        this.setUpdatedOn(id);

        return this.pool.query(sqlQuery, sqlValues);
    }
}

export default Model;
