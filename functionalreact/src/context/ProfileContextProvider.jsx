import React, { createContext, useState } from 'react'

const ProfileContext = createContext(); // central placeholder for data

export default function ProfileContextProvider(props) {
  let [avatar, setAvatar] = useState("banu.png");
  let [displayName, setDisplayName] = useState("Banu Prakash");
  return (
    <div>
        <ProfileContext.Provider value={{avatar, displayName, setDisplayName}}>
            {props.children}
        </ProfileContext.Provider>
    </div>
  )
}

export  {
    ProfileContext
};