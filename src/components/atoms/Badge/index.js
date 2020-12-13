import React from 'react';
const classNames = require('classnames');

const Badge = ({label, position, type, color, size,onClick}) => {
    const className = classNames({
        'pl-badge': true,
        [color]: color,
        [position]:position,
        [size]:size,
        [type]:type
    });
    return (
     <div className={className} onClick={onClick}>{label}</div>
    );
};

export default Badge;
