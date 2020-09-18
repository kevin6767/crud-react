import React, { useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {


const usersData = [
    {id: 1, name: 'Manning', username: 'thegreatchocolateMANDRAKE'},
    {id: 2, name: 'Laura', username: 'Lauralingerie'},
    {id: 3, name: 'Cali', username: 'MadeInCALIfiornia'}
]

const [users, setUsers] = useState(usersData)

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
