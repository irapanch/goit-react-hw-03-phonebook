import React, { Component } from 'react';
import contactsData from '../assets/contacts.json';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };
  //++++++++++++++++++
  componentDidMount() {
    console.log('MOUNT');
    const items = JSON.parse(window.localStorage.getItem('CONTACTS'));
    if (items?.length) {
      this.setState({ contacts: items });
    }
    console.log(items);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'CONTACTS',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  //+++++++++++++++++++++
  handleAddContact = ({ name, number }) => {
    const contact = {
      name,
      id: nanoid(),
      number,
    };

    const item = this.state.contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, contact],
      }));
    }
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContactsArr = (data, filter) => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filteredContactsArr(contacts, filter);
    return (
      <div>
        <ContactForm addContact={this.handleAddContact} contacts={contacts} />
        <Filter
          takeData={this.handleChangeFilter}
          filteredContacts={this.filteredContactsArr}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
