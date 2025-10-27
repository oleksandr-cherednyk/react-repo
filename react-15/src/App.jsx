import React, { useCallback, useMemo, useState } from 'react';
import { userList } from './data/userList';
import { UserList } from './components/UserList';

export default function App() {

  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((list, query) => {
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(u => u.name.toLowerCase().includes(q));
  }, []); 


  const filteredUsers = useMemo(() => {
    return filterUsers(userList, filter);
  }, [filter, filterUsers]);

  return (
    <div className="container">
      <h1 className="h1">Оптимизация фильтрации</h1>

      <input
        className="input"
        type="text"
        placeholder="Фильтр"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <UserList users={filteredUsers} />
    </div>
  );
}
