import React from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const Container = ({ type,children}) => {
    const className = classNames({
        'pl-container': true,
        [type]: type
    });
    return (
     <div className={className}>{children}</div>
    );
};

Container.propTypes = {
    type: PropTypes.string.isRequired,
};
Container.defaultProps = {
    type: 'primary',
};

export default Container;
