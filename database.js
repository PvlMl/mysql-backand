import mysql from "mysql2";
  
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourPass',
  database: 'yourDb'
});
 
export default db;