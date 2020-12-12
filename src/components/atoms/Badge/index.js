import React from 'react';
const classNames = require('classnames');

const Badge = ({label, position, type, color, size}) => {
    const className = classNames({
        'pl-badge': true,
    });
    return (
     <div className={className}>{label}</div>
    );
};

export default Badge;
