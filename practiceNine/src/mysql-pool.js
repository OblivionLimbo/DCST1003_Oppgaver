import mysql from 'mysql';

// Setup MySQL-server connection pool
export let pool = mysql.createPool({
  host: 'mysql-ait.stud.idi.ntnu.no',
  user: 'kristoju', // Replace "username" with your username
  password: 'cLZm8ZII', // Replace "password" with your password
  database: 'kristoju', // Replace "username" with your username
  connectionLimit: 1, // Reduce load on NTNU MySQL server
});
