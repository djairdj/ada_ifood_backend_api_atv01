import mysql from "mysql2/promise";

const connection_to_mysql = mysql.createPool(
  {
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "",
    database: ''
  }
);
export{connection_to_mysql as connection}