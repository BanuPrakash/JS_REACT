import React, { useContext } from 'react'
import { ProfileContext } from './ProfileContextProvider'

export default function Third() {
    let {avatar, displayName, setDisplayName} = useContext(ProfileContext);
  return (
    <div>
        Third <br />
        Avatar: {avatar} <br />
        Name : {displayName} <br />
        <button onClick={()=>setDisplayName("banu-The Trainier")}>Change Name</button>
    </div>
  )
}
