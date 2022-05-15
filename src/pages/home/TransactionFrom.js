import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionFrom({ uid }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  // reset the form fields after successful transaction addition
  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a Transaction</h3>
      <aside>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Transaction name:</span>
            <input
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Amount ($):</span>
            <input
              type='number'
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <button type='submit'>Add Transaction</button>
        </form>
      </aside>
    </>
  );
}
