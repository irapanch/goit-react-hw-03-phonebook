import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledTitle,
  StyledDesc,
  StyledBtn,
} from '../styles/App.Styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledTitle>Phonebook</StyledTitle>
        <StyledDesc>Name</StyledDesc>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChangeInput}
          placeholder="Name"
        />
        <StyledDesc>Phone number</StyledDesc>
        <input
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          value={number}
          onChange={this.handleChangeInput}
          placeholder="XXX-XXX-XXXX"
        />

        <StyledBtn type="submit">Add Contact</StyledBtn>
      </StyledForm>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
