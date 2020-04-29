module.exports = (con) => {
    const createDB = 'CREATE DATABASE db';
    con.query(createDB, (err) => {
        if (err) throw err;
        console.log('Database db created!');
    });

    const createTable = 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, address VARCHAR(255), premium BOOLEAN)';
    con.query(createTable, (err) => {
        if (err) throw err;
        console.log('Table users in database db created!');
    });

    const values = [
        ['Bojan Dimitric', 42, 'Bojanova 1, 11030, Beograd', true],
        ['Jelena Dimitric', 29, 'Jelenina 1, 11030, Beograd', false],
        ['Milanka Dimitric', 64, 'Milankina 1, 75446, Milici', true],
        ['Radomir Dimitric', 65, 'Radomirova 1, 75446, Milici', true],
        ['Branislav Dimitric', 38, 'Rue de Branislav, 1201, Zeneva', false],
        ['Filip Dimitric', 2, 'Rue de Filip, 1201, Zeneva', false]
    ];
    const instertIntoTable = 'INSERT INTO users (name, age, address, premium) VALUES ?';
    con.query(instertIntoTable, [values], (err, result, fields) => {
        if (err) throw err;
        console.log('Table users in database db populated!'); 
    });
};