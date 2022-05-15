import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

// styles
import styles from './Home.module.css';

// components
import TransactionFrom from './TransactionFrom';

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}></div>
      <div className={styles.sidebar}>
        <TransactionFrom uid={user.uid} />
      </div>
    </div>
  );
}
