import React, { useEffect, useState } from 'react'

export default function UserDetails({ userId }) {
    let [user, setUser] = useState(null);
    // componentDidUpdate
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + userId)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]);

    return (
        <div>
            <h1>UserDetails</h1>
            <div>
                {
                    user && (<div>
                        {user.address.city} , {user.address.zipcode}
                    </div>)
                }
            </div>
        </div>
    )
}
