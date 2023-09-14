// import React from 'react';
// import {
//   StyledForm,
//   StyledTitle,
//   StyledDesc,
//   StyledBtn,
//   StyledContact,
//   StyledContactLi,
//   StyledSpan,
//   StyledBtnDelete,
// } from './styles/App.Styled';

// import { nanoid } from 'nanoid';

// class App extends React.Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//     search: '',
//   };

//   handleNameChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   handleNumberChange = event => {
//     this.setState({ number: event.target.value });
//   };

//   handleSearchChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };
//     // Показати, якщо контакт вже є
//     const duplicateContact = this.state.contacts.find(
//       contact => contact.name === newContact.name
//     );

//     if (duplicateContact) {
//       alert(`${newContact.name} is already in contacts!`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//       name: '',
//       number: '',
//     }));
//   };

//   handleContactDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     // Фільтрація контактів за ім'ям
//     const filteredContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.search.toLowerCase())
//     );

//     // Відображення списку контактів
//     const contactList = filteredContacts.map(contact => (
//       <StyledContactLi key={contact.id}>
//         {' '}
//         <StyledSpan>
//           {contact.name} : {contact.number}{' '}
//         </StyledSpan>
//         <StyledBtnDelete onClick={() => this.handleContactDelete(contact.id)}>
//           Delete
//         </StyledBtnDelete>
//       </StyledContactLi>
//     ));

//     return (
//       <div>
//         <StyledForm onSubmit={this.handleFormSubmit}>
//           <StyledTitle>Phonebook</StyledTitle>
//           <StyledDesc>Name</StyledDesc>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleNameChange}
//             placeholder="Name"
//           />
//           <StyledDesc>Phone number</StyledDesc>
//           <input
//             type="tel"
//             name="number"
//             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//             required
//             value={this.state.number}
//             onChange={this.handleNumberChange}
//             placeholder="Phone number"
//           />

//           <StyledBtn type="submit">Add Contact</StyledBtn>
//         </StyledForm>
//         <StyledContact>
//           <StyledTitle>Contacts</StyledTitle>
//           <StyledDesc>Find contacts by name</StyledDesc>
//           <input
//             type="text"
//             name="search"
//             value={this.state.search}
//             onChange={this.handleSearchChange}
//             placeholder="Search by name"
//           />
//           <ul>{contactList}</ul>
//         </StyledContact>
//       </div>
//     );
//   }
// }
// export default App;
