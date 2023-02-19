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
        const query = `SELECT ${columns} FROM ${this.table} WHERE id = '${id}'`;
        return this.pool.query(query);
    }

    async complexSelect(columns, clause, from) {
        let query = `SELECT ${columns} FROM ${from}`;
        if (clause) query += clause;
        return this.pool.query(query);
    }

    async update(columns) {
        const query = `UPDATE ${this.table} SET ${columns}`;
        return this.pool.query(query);
    }

    async deleteById(id) {
        const query = `DELETE FROM ${this.table} WHERE id = '${id}' `;
        return this.pool.query(query);
    }
}

export default Model;
