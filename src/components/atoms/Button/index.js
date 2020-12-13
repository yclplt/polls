import React from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const Button = ({ label, type,position,onClick,color}) => {
    const className = classNames({
         'pl-button': true,
         [type]: type,
         [position]: position,
         [color]: color
    });
    return (
         <button onClick={onClick} className={className}>{label}</button>
    );
};

Button.propTypes = {
     type: PropTypes.string.isRequired,
};
Button.defaultProps = {
     type: 'primary',
};
export default Button;