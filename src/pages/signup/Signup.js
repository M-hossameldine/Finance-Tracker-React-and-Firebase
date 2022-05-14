import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import styles from './Signup.module.css';

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(displayName, email, password);
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <label>
        <span>Display Name:</span>
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className='btn' disabled={isPending}>
        Signup
      </button>
      {error && <p> {error} </p>}
    </form>
  );
}
