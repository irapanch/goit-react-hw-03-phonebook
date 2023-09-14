import React from 'react';
import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';
import { StyledTitle, StyledContact } from '../styles/App.Styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledContact>
      <StyledTitle>Contacts</StyledTitle>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            {...contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </StyledContact>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
