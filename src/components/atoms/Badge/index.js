import React from 'react';
const classNames = require('classnames');

const Badge = ({label, position, type, color, size,onClick}) => {
    const className = classNames({
        'pl-badge': true,
    });
    return (
     <div className={className} onClick={onClick}>{label}</div>
    );
};

export default Badge;
