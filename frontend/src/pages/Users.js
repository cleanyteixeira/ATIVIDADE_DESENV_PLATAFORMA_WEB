import React, { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import { createUser, deleteUser, fetchUsersApi } from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await fetchUsersApi();
    setUsers(data);
  };

  const handleCreateUser = async (userData) => {
    try {
      await createUser(userData);
    } catch (err) {
      if (err?.response?.data?.message?.length) {
        alert(err.response.data.message.join(", "));
      } else {
        alert("Algo de errado aconteceu.");
      }
    }
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="users">
      <h2>Usuários</h2>
      <UserForm onCreate={handleCreateUser} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
