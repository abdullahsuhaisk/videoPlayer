import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Title = ({ title, description, styles }) => {
  return (
    <StyledWrapper styles={styles} className="vb--title">
      <span className="vb--title-title">{title}</span>
      <span className="vb--title-description">{description}</span>
    </StyledWrapper>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  styles: PropTypes.object
};

Title.defaultProps = {
  description: '',
  styles: {}
};

export default Title;
