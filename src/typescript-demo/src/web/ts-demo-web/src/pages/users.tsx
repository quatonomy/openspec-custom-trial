import { useState } from 'react';
import { tsDemoApi_getUsers } from '../integrations';

export function GetUsers(props: any) {

  if (!props.test) {
    return null;
  }

  const [users, setUsers] = useState<Awaited<ReturnType<typeof tsDemoApi_getUsers>>>([]);
  
  async function fetchUsers() {
    const allusers = await tsDemoApi_getUsers();
    setUsers(allusers);
  }

  return (
    <div>
      <button onClick={fetchUsers}>Get Users</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}