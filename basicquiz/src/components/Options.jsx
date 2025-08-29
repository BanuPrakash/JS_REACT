import React from 'react'

export default function Options(props) {
  return (
   <li>
    <input type="radio" name={props.option} />
    {props.option}
   </li>
  )
}
