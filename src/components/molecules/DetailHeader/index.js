import React from 'react';
import  { Text, Badge} from '../../index';
const classNames = require('classnames');

const DetailHeader = ({data}) => {
    const className = classNames({
        'pl-detail-header': true,
    });
    return (
            <div className={className}>
                <Text position="left" color="white" size="lg" label="Which Framework do you like most?" />
                <div className="pl-row">
                    <Text position="left" color="white" size="sm" label="3 Hours Ago" />
                    <Badge position="right" label="vote 2" />
                </div>
            </div>

    );
};

export default DetailHeader;
