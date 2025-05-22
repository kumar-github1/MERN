const exp = require("express");
const app = exp();
const sql = require("mysql2");

const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "kumar...",
    database: "employee"
});

app.listen(8000, () => {
    console.log("server is running on port 8000");
})
db.connect(err => {
    if (err) console.log("Error in the connection of the database");
    else console.log("Database connected");
})

app.get("/data", (req, res) => {
    const query = 'select * from emp';
    db.query(query, (err, result) => {
        if (err) console.log("Error in fetching the Data");
        else {
            res.json(result);
        }
    })
});

app.get("/single", (req, res) => {
    const id = req.query.id;
    console.log(id);
    const query = "select * from emp where empno = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Database error");
        } else {
            if (result.length === 0) {
                res.status(404).send("Employee not found");
            } else {
                res.json(result); // ✅ respond with JSON
            }
        }
    });

})


app.get("/product", (req, res) => {
    res.send("The data is from product")
});

