// create web server
const express = require("express");
const app = express();
const port = 3000;

// import mysql
const mysql = require("mysql");

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "comments",
});

// connect to database
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

// get all comments
app.get("/comments", (req, res) => {
  connection.query("SELECT * FROM comments", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });
});

// get comment by id
app.get("/comments/:id", (req, res) => {
  connection.query(
    "SELECT * FROM comments WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json(results);
      }
    }
  );
});

// create comment
app.post("/comments", (req, res) => {
  const { body } = req;
  connection.query(
    "INSERT INTO comments (comment) VALUES (?)",
    [body.comment],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ id: results.insertId });
      }
    }
  );
});

// update comment by id
app.put("/comments/:id", (req, res) => {
  const { body } = req;
  connection.query(
    "UPDATE comments SET comment = ? WHERE id = ?",
    [body.comment, req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ id: req.params.id });
      }
    }
  );
});

// delete comment by id
app.delete("/comments/:id", (req, res) => {
  connection.query(
    "DELETE FROM comments WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ id: req.params.id });
      }
    }
  );
});

// listen to port