module.exports = (app, con) => {
    app.get('/users', (req, res, next) => {
        const selectAll = 'SELECT * FROM users';
        con.query(selectAll, (err, results, fields) => {
            if (err) throw err;
            return res.send(results);
        });
    });

    app.get('/users/:id', (req, res, end) => {
        const getUserByID = `GET * FROM users WHERE id = ?`;
        res = con.query(getUserByID, [req.params.id], (err, results, fields) => {
            if (err) throw err;
            return res.send(results[0]);
        });
    });

    app.post('/users', (req, res, end) => {
        const insertUser = `INSERT INTO users (name, age, address, premium) VALUES (?, ?, ?, ?)`;
        res = con.query(insertUser, [req.body.name, req.body.age, req.body.address, req.body.premium], (err, results, fields) => {
            if (err) throw err;
            return res.send('One row inserted into table users!');
        });
    });
    
    app.put('/users', (req, res, end) => {
        const updateUserByID = `UPDATE users SET name = ?, age = ?, address = ?, premium = ? WHERE id = ?`;
        res = con.query(updateUserByID, [req.body.name, req.body.age, req.body.address, req.body.premium, req.body.id], (err, results, fields) => {
            if (err) throw err;
            return res.send('One row updated in table users!');
        });
    });
    
    app.delete('/users/:id', (req, res, end) => {
        const deleteUser = `DELETE FROM users WHERE id = ?`;
        res = con.query(deleteUser, [req.params.id], (err, results, fields) => {
            if (err) throw err;
            return res.send('One row deleted out of table users!');
        });
    });
};