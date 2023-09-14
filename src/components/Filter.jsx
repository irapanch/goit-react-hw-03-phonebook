import React from 'react';
import PropTypes from 'prop-types';
import { StyledDesc, StyledContact } from '../styles/App.Styled';

export const Filter = ({ takeData }) => {
  return (
    <StyledContact>
      <StyledDesc>Find contacts by name</StyledDesc>
      <input
        type="text"
        name="search"
        onChange={takeData}
        placeholder="Search by name"
      />
    </StyledContact>
  );
};

export default Filter;

Filter.propTypes = {
  takeData: PropTypes.func,
};
