import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export default function TransactionFrom() {

  const initialForm = {
    amount: '',
    description: '',
    date: ''
  };

  const [form, setForm] = useState(initialForm);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleDate(newValue) {
    setForm({ ...form, date: newValue });
  }

  const handleSubmit = async (e) => {
    console.log(form)
    e.preventDefault();
    await fetch("http://localhost:8081/api/v1/transaction",{
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'content-type' : 'application/json'
      }
    })
    setForm(initialForm);
  }


  return (
    <Card sx={{ minWidth: 275, marginTop: 3 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Add New Transaction Here
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField  sx={{ marginRight: 5 }} id="outlined-basic"  onChange={handleInput} value={form.amount} name="amount" size="small"  label="Amount" variant="outlined" type="number" />
            <TextField sx={{ marginRight: 5 }} id="outlined-basic" onChange={handleInput} value={form.description} name="description" size="small"  label="Description" variant="outlined" type="text" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                sx={{ marginRight: 5 }}
                label="Transaction Date"
                value={form.date}
                onChange={handleDate}
                inputFormat="MM/DD/YYYY"
                renderInput={(params) => (
                    <TextField sx={{ marginRight: 5 }} size="small" {...params} />
                  )}
                />
            </LocalizationProvider>
            <Button type="submit" variant="contained">Submit</Button>
            </form>
        </CardContent>
    </Card>
  );
}
