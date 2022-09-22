import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Transaction from './models/transaction.js';

const app = express();
const PORT  = 8081;

// global middleware
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.post('/transaction', async (req, res) => {
    const {amount, description, date} = req.body;
    const transaction = new Transaction({
        amount,
        description,
        date
    });
    await transaction.save();
    res.json({
        message: "Success"
    })
});


await mongoose.connect('mongodb+srv://mdrabiulhasan:mdrabiulhasan@mern-expense.ecd8t5c.mongodb.net/?retryWrites=true&w=majority');
console.log("mongo atlas database are connected");

app.listen( PORT, () => {
    console.log("Your application are running http://localhost:" + PORT);
});