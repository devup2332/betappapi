import mysql2 from "mysql2";
import { environments } from "./environemts";

const pool = mysql2.createPool({
  host: environments.DB.HOST,
  user: environments.DB.USER,
  database: environments.DB.DATABASE,
  password: environments.DB.PASSWORD,
});

const promisePool = pool.promise();

const connectDatabase = () => {
  pool.getConnection((err) => {
    if (err) return console.log("Database fail", err);
    console.log("Database is ready");
  });
};

export default {
  connectDatabase,
  promisePool,
};
