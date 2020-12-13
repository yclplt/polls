import React from 'react';
const classNames = require('classnames');

const Textarea = ({value, position, type, color, size, onChange}) => {
    const className = classNames({
        'pl-textarea': true,
    });
    return (
         <textarea onChange={val => onChange(val.target.value)} className={className} value={value} />
    );
};

export default Textarea;
