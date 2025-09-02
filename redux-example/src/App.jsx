import { useState } from 'react';
import { connect } from 'react-redux';
import ContactView from './ContactView';

function App(props) {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');

  function addContact() {
    let contact = {
       name,
       email
    }
    props.add(contact);
  }

  return (
    <div>
      <h1>Welcome, {props.name}</h1>
      <form>
        Email <input type='email' onChange={evt => setEmail(evt.target.value)} /> <br />
        Name <input type='text' onChange={evt => setName(evt.target.value)} /> <br />
        <button type="button" onClick={addContact}>Add Contact</button>
        <button type="button" onClick={props.clear}>Clear Contacts</button>
      </form>
      {
        props.contactList.map(contact => <ContactView
          key={contact.email}
          contact={contact}
          deleteContact={props.remove}
        />)
      }
    </div>
  )
}

// argument is state from redux
// return props to App
function mapStateToProps(state) {
  return {
    contactList: state.contacts,
    pic: state.profile.avatar,
    name: state.profile.displayName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (contact) => dispatch({ type: 'ADD_CONTACT', payload: contact }),
    remove: email => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clear: () => dispatch({ type: 'CLEAR_CONTACTS' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
