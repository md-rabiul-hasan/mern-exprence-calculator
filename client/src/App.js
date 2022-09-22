import { useState, useEffect } from 'react';
import NavigationBar from "./components/NavigationBar";

function App() {

  const initialForm = {
    amount: '',
    description: '',
    date: ''
  };

  const [form, setForm] = useState(initialForm);

  const [transactions, setTransactions] = useState([]);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8081/api/v1/transaction",{
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'content-type' : 'application/json'
      }
    })
    fetchTransaction();
    setForm(initialForm);
  }

  const fetchTransaction = async () => {
    const res = await fetch("http://localhost:8081/api/v1/transaction");
    const {data} = await res.json();
    setTransactions(data);
  }



  useEffect(() => {
    fetchTransaction()
  }, []);

  return (
    <div>
      <NavigationBar />
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleInput} value={form.amount} placeholder="amount" name="amount" />
        <input type="text" onChange={handleInput} value={form.description} placeholder="description" name="description" />
        <input type="date" onChange={handleInput} value={form.date} name="date" />
        <button type="submit">Submit</button>
      </form>
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map( (transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction._id}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
