import {
    dropTables,
    createTables,
    insertIntoTables
} from './queryFunctions.js';

(async () => {
    await dropTables();
    console.log('table \'messages\' dropped');
    await createTables();
    console.log('table \'messages\' created');
    await insertIntoTables();
    console.log('table \'messages\' filled');
})();