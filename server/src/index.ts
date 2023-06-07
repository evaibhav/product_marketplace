import cors from "cors";
import express from "express";
import mysql from "mysql";
import productRouter from "./router/productRouter";
import userRouter from "./router/userRouter";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRouter);
app.use(productRouter);

// export const connection = mysql.createConnection(`mysql://root:root@localhost:3307/marketplace`);
export const dbconnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "marketplace",
    user: "root",
    password: "root",
});

dbconnection.connect(function (err) {
    if(err){
        console.log(err);
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 })

// const dbConnection = new Sequelize("organicworld", "postgres", "root", {
//   host: "localhost",
//   dialect: "postgres",
// });

// dbConnection
//   .authenticate()
//   .then(() => {
//     console.log("Connected to PostgreSql");
//   })
//   .catch((err) => {
//     console.log("Unable to connect to the database:", err);
//   });

app.listen("8080", () => {
  console.log(`🚀 Server started on port ${8080}`);
});
