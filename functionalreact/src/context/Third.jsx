import React, { useContext } from 'react'
import { ProfileContext } from './ProfileContextProvider'

export default function Third() {
    let {avatar, displayName} = useContext(ProfileContext);
  return (
    <div>
        Third <br />
        Avatar: {avatar} <br />
        Name : {displayName} <br />
    </div>
  )
}
