import React from 'react';
import PropTypes from 'prop-types';

const PanelHeader = (props) => {
    const { title, onClick } = props;

    return (
        <div className="vjs-panel-header" onClick={() => onClick()}>
            <button className="vjs-panel-title">{title}</button>
        </div>
    );
};

PanelHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

PanelHeader.defaultProps = {
    onClick: () => { }
};

export default PanelHeader;