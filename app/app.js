const express = require('express');
const mysql = require('mysql');
const parser = require('body-parser');
// const create = require('./create.js');
const api = require('./api.js');
// const drop = require('./drop.js');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db',
    port: 3306
});

con.connect((err) => {
    if (err) throw err;
    console.log('MySQL database db running on port 3306');
});

const app = express();

app.set('port', process.env.port || 8080);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json);

// create(con);

api(app, con);

// drop(con);

const port = 8080;
const host = '127.0.0.1';

app.listen(port, () => console.log('Node.js express server running at https://' + host +  ':' + port));