import React from 'react'

export default function ContactView({contact, deleteContact}) {
  return (
    <div>
        {contact.email}, {contact.name}  &nbsp;
        <button type="button" onClick={() => deleteContact(contact.email)}>&times;</button>
    </div>
  )
}
