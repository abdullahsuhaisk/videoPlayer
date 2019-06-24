import React from 'react';
import PropTypes from 'prop-types';

import AddToCardButtonWrapper from './AddToCardButton.style';

const AddToCardButton = (props) => {
  const { onClick, styles } = props;
  return (
    <AddToCardButtonWrapper styles={styles}>
      <button onClick={onClick} className="vb--addToCardButton">
        <div className="vb--addToCardButton-icon" />
        <div className="vb--addToCardButton-text">Add To Card</div>
      </button>
    </AddToCardButtonWrapper>
  );
};

AddToCardButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddToCardButton;
