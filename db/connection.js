import "dotenv/config";
import mysql from "mysql2";

const credentials = {
  host: "localhost",
  user: "host",
  password: process.env.DB_PSW,
  database: "blog",
  port: "3306",
};

const connection = mysql.createConnection(credentials);

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connesso");
});

export default connection;
