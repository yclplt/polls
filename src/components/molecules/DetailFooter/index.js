import React from 'react';
import  { Button, Badge} from '../../index';
const classNames = require('classnames');

const DetailFooter = ({data,onClick}) => {
    const className = classNames({
        'pl-footer-header': true,
    });
    return (
            <div className={className}>
                 <Button onClick={onClick} position="right" color="white" size="sm" label="Send Vote" />
            </div>
    );
};

export default DetailFooter;
