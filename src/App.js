import React, { useEffect, useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import { getUsers } from './services/getUsers.services'

const App = () => {

const [users, setUsers] = useState([])

useEffect(() => {
    getUsers().then(users => {
        setUsers(users);
        console.log(users)
        }); 
  }, []);




const addUser = (user) => {
    user.id = users.length + 1 
    setUsers([...users, user])
}


  return (
    <div className="container">
        <h1> CRUD with Hooks :)</h1>
        <div className="flex-row"> 
            <div className="flex-large">
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
            </div>
            <div className="flex-large">
                <h2>View Users</h2>
                <UserTable users={users} />
            </div>
        </div>
    </div>
  );
}

export default App;
