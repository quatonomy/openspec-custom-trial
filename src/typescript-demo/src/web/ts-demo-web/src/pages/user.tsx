import { useState } from "react";
import { tsDemoApi_getUser, tsDemoApi_createUser } from "../integrations";

function GetUser() {
  const [users, setUsers] = useState<Awaited<ReturnType<typeof tsDemoApi_getUser>> | null>(null);
  const [userId, setUserId] = useState<string>("");
    
  async function fetchUsers(userId: string) {
    const allusers = await tsDemoApi_getUser(userId);
    setUsers(allusers);
  }

  return (
    <div>
      <input onChange={(e) => setUserId(e.target.value)}></input>
      <button onClick={() => fetchUsers(userId)}>Get User</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users && (
            <tr>
              <td>{users._id}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function CreateUser() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [createUserName, setCreateUserName] = useState<string>("");
  const [createUserEmail, setCreateUserEmail] = useState<string>("");

  async function handleCreateUser() {
    const newUser = await tsDemoApi_createUser({ name, email });
    setCreateUserName(name);
    setCreateUserEmail(email);
    console.log(newUser);
  }

  return (
    <div>
      <h2>Create User</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleCreateUser}>Create User</button>
      <br></br><br></br>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{createUserName}</td>
              <td>{createUserEmail}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}


export function User() {
  
  const [getUserClicked, setGetUserClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setGetUserClicked(!getUserClicked)}>Get User</button>
      <button onClick={() => setGetUserClicked(false)}>Create User</button>

      {getUserClicked ? <GetUser /> : <CreateUser />}
    </div>
  );
}