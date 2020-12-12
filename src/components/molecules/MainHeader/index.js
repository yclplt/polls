import React from 'react';
import  { Text, Button} from './../../index';
const classNames = require('classnames');

const MainHeader = () => {
    const className = classNames({
        'pl-main-header': true,
    });
    return (
        <div className={className}>
             <Text position="left" color="white" size="lg" label="Polls" />
             <Button position="right" type="primary" label="Create Polls"></Button>
        </div>
    );
};

export default MainHeader;
