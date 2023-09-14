import PropTypes from 'prop-types';
import {
  StyledContactLi,
  StyledSpan,
  StyledBtnDelete,
} from '../styles/App.Styled';
export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <StyledContactLi>
      <StyledSpan>
        {name}: <span>{number}</span>
      </StyledSpan>
      <StyledBtnDelete onClick={() => deleteContact(id)}>
        delete
      </StyledBtnDelete>
    </StyledContactLi>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
