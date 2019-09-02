import React from 'react';

export const childrenWithProps = (children, props) =>
  React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      index,
      ...props
    });
  });
