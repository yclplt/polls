import React from 'react';
import  { Button} from './../../index';
const classNames = require('classnames');

const CreateFooter = ({addPoll,addChoice}) => {
    const className = classNames({
        'pl-main-footer': true,
    });
    return (
        <div className={className}>
             <Button onClick={addPoll} position="right" color="white" size="sm" label="Create Poll" />
        </div>
    );
};

export default CreateFooter;
