import mysql from "mysql2/promise";

const connection_to_mysql = mysql.createPool(
  {
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "",
    database: 'api_ada_vem_ser_tech'
  }
);
export{connection_to_mysql as connection}