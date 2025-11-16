import React from 'react';
import { useSelector } from 'react-redux';

function UserList() {
  const users = useSelector((state) => state.users.users);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.name} ({u.email})
        </li>
      ))}
    </ul>
  );
}

export default UserList;
