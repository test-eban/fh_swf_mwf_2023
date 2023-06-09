import {
    dropTables,
    createTables,
    modifyTables,
    insertTables
} from './queryFunctions.js';

(async () => {
    await dropTables();
    console.log('tables dropped');
    await createTables();
    console.log('tables created');
    await modifyTables();
    console.log('tables modified');
    await insertTables();
    console.log('tables filled');
    console.log('\n\nSetup finished. Please press CTRL+C to end the execution.')
})();

