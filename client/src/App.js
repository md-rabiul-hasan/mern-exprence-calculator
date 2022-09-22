import { useState } from 'react';

function App() {

  const [form, setForm] = useState({
    amount: '',
    description: '',
    date: ''
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8081/transaction",{
      method: "POST",
      body:form
    })
    console.log(res)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleInput} value={form.amount} placeholder="amount" name="amount" />
        <input type="text" onChange={handleInput} value={form.description} placeholder="description" name="description" />
        <input type="date" onChange={handleInput} value={form.date} name="date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
