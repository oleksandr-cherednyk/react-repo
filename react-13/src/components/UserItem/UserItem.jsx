import React from 'react';
import styles from './UserItem.module.css';

export default function UserItem({ user }) {
  return <li className={styles.item}>{user.name}</li>;
}
