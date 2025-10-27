import React, { memo, useRef } from "react";

const UserListBase = ({ users }) => {
  const renders = useRef(0);
  renders.current++;

  return (
    <div className="card">
      <div className="card-header">
        <h3>Пользователи </h3>
        <span>количество рендеров: {renders.current}</span>
        <span>Показано количество: {users.length}</span>
      </div>
      <ul className="list">
        {users.map((u) => (
          <li key={u.id} className="list-item">
            {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const UserList = memo(UserListBase);
