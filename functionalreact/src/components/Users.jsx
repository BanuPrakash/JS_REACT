import React, { useEffect, useState } from 'react'

export default function Users({updateId}) {
 let [users, setUsers] = useState(null);
  
 // get called only once componentDidMount;
 // empty dependency
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data));
  },[]);

  return (
    <div>
        <h1>Users</h1>
        {
            users && users.map(user => <div key={user.id} onMouseEnter={() => updateId(user.id)}> 
            {user.name}, {user.email}
            </div>)
        }
    </div>
  )
}
