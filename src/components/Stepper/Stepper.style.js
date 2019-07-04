import styled from 'styled-components';

export const stepperStyles = {
  '.vb--stepper--group': {
    display: 'flex',
    width: '65px',
    height: '28px',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#f5f9fc',
    '.button': {
      borderRadius: '4px',
      backgroundColor: '#f5f9fc',
      outline: 'none',
      cursor: 'pointer',
      width: '20px'
    }
  },
  '.vb--stepper--value': {
    padding: '7px',
    borderRadius: '4px',
    boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#00acd8',
    width: '27px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#ffffff',
    fontWeight: 'bolder'
  },
  '.btn-nonoutline': {
    outline: 'none'
  }
};

export const Wrapper = styled.div((props) => ({
  ...stepperStyles,
  ...props.styles
}));
