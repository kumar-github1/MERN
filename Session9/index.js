const exp = require("express");
const app = exp();
const mysql = require("mysql2");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "student",
  database: "employee",
});

//Connection of Application server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

//Connection of database server
db.getConnection((err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log("Database is connected");
  }
});

const pro = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

//Select query is used
app.get("/alluser", (req, res) => {
  const que = "select * from emp";
  db.query(que, (err, result) => {
    if (err) {
      return res.send("Database Error");
    }
    res.send(result);
  });
});

app.post("/singleuser", (req, res) => {
  const { empno } = req.body;
  if (empno < 7369) {
    return res.send("Employee Doesn't exists");
  }
  const que = "select * from emp where empno=?";
  db.query(que, [empno], (err, result) => {
    if (err) {
      return res.send("Database Error");
    }
    res.send(result);
  });
});

app.post("/sendData", (req, res) => {
  const { empid, name, job } = req.body;
  const que = "Insert into emp(empno,ename,job) values(?,?,?)";
  db.query(que, [empid, name, job], (err, result) => {
    if (err) {
      return res.send("Database Error");
    }
    return res.send("Data is inserted ");
  });
});
