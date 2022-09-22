import { useState, useEffect } from 'react';
import NavigationBar from "./components/NavigationBar";
import TransactionFrom from './components/TransactionForm';

function App() {


  const [transactions, setTransactions] = useState([]);



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
      <TransactionFrom />
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
