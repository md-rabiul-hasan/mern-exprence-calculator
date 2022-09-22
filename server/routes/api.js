import { Router } from 'express';
import Transaction from "./../models/transaction.js";


const router = Router();


// transaction route here

router.post('/transaction', async (req, res) => {
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


router.get('/transaction', async (req, res) => {
    const transactions = await Transaction.find({});
    res.json({
        data: transactions
    })
});

export default router;