import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from "./routes/api.js";
import connect from "./config/database.js";

const app = express();
const PORT  = 8081;

// global middleware
app.use(cors());
app.use(bodyParser.json())

// router
app.use("/api/v1", apiRouter);


// connect database;
await connect();





app.listen( PORT, () => {
    console.log("Your application are running http://localhost:" + PORT);
});