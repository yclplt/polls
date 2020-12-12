import React from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const Button = ({ label, type,position}) => {
    const className = classNames({
         'pl-button': true,
         [type]: type,
         [position]: position
    });
    return (
         <button className={className}>{label}</button>
    );
};

Button.propTypes = {
     type: PropTypes.string.isRequired,
};
Button.defaultProps = {
     type: 'primary',
};
export default Button;