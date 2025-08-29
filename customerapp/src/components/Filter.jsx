import React from 'react'

export default function (props) {
  return (
    <div>
        <input type='text' 
        placeholder='search by name' 
        onChange={(evt) => props.filterEvt(evt.target.value)}
        />
    </div>
  )
}
