import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
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
