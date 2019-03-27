import React from 'react';

const Dialog = (props) => {
	const style = {
		width: '100%',
		height: '100%',
		background: '#0006',
		position: 'relative'
	};

	const closeButton = {
		position: 'absolute',
		right: 15,
		top: 10,
		fontSize: '30px',
		color: '#FFF',
		cursor: 'pointer'
	};

	return (
		<div style={style}>
			<span style={closeButton} onClick={() => props.onClose()}>
				&times;
			</span>
			{props.children}
		</div>
	);
};

export default Dialog;
