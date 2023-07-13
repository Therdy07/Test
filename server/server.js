const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_yesbet",
}); 

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM tb_user WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Error" });
        }
      }
    }
  );
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
