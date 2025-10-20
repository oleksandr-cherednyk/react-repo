import React from 'react';
import Filter from './components/Filter/Filter';
import UserList from './components/UserList/UserList';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}
