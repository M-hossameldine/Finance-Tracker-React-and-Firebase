import React from 'react';

// styles
import styles from './Home.module.css';

// components
import TransactionFrom from './TransactionFrom';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}></div>
      <div className={styles.sidebar}>
        <TransactionFrom />
      </div>
    </div>
  );
}
