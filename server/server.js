import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT  = 8081;

app.get('/', (req, res) => {
    res.send("Hello World")
});

await mongoose.connect('mongodb+srv://mdrabiulhasan:mdrabiulhasan@mern-expense.ecd8t5c.mongodb.net/?retryWrites=true&w=majority');
console.log("mongo atlas database are connected");

app.listen( PORT, () => {
    console.log("Your application are running http://localhost:" + PORT);
});