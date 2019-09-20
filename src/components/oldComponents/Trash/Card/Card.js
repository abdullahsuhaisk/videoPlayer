import React from 'react';
import { Wrapper } from './Card.style';

const Card = (props) => {
  const { styles, title, subtitle, text, children, header, footer } = props;

  return (
    <Wrapper styles={styles} className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
        {text && <p className="card-text">{text}</p>}
        {children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </Wrapper>
  );
};

export default Card;
