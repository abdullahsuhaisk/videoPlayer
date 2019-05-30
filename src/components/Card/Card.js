import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Card = (props) => {
  const { styles, title, subtitle, text, body, header, footer } = props;

  return (
    <StyledWrapper styles={styles} className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
        {text && <p className="card-text">{text}</p>}
        {body}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </StyledWrapper>
  );
};

export default Card;
