import express from 'express';

const app = express();
const PORT  = 8081;

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.listen( PORT, () => {
    console.log("Your application are running http://localhost:" + PORT);
});