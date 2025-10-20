import React from 'react';
import { connect } from 'react-redux';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

function UserList({ users, filter }) {
  const q = filter.toLowerCase();
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(q)
  );

  return (
    <ul className={styles.list}>
      {filtered.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
      {!filtered.length && <p>Ничего не найдено</p>}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
