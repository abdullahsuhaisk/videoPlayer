import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
	const { top, left, width, height, backgroundColor, onClick } = props;

	const style = {
		position: 'absolute',
		top: `${top}`,
		left: `${left}`,
		width: `${width}`,
		height: `${height}`,
		backgroundColor: `${backgroundColor}`,
		borderRadius: '50%'
	};

	return <div style={style} onClick={() => onClick()} />;
};

Circle.propTypes = {
	top: PropTypes.string,
	left: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	backgroundColor: PropTypes.string
};

Circle.defaultProps = {
	top: '0px',
	left: '0px',
	width: '100px',
	height: '100px',
	backgroundColor: '#21232F'
};

export default Circle;
