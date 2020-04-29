module.exports = (con) => {
    const dropTable = 'DROP TABLE users IF EXISTS';
    con.query(dropTable, (err) => {
        if (err) throw err;
        console.log('Table users in database db droped!');
    });

    const dropDB = 'DROP DATABASE db';
    con.query(dropDB, (err) => {
        if (err) throw err;
        console.log('Database db droped!');
    });
};