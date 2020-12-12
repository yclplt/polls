import React from 'react';
import  { Text, Badge} from './../../index';
const classNames = require('classnames');

const QuestionItem = () => {
    const className = classNames({
        'pl-question-item': true,
    });
    return (
        <div className={className}>
            <div className="pl-question-row">
                <Text position="left" color="white" size="md" label="Which framework do you like the most?" />
                <Badge position="right" type="primary" label="100 Votes"></Badge>
             </div>
             <div className="pl-question-row">
                <Text position="left" color="white" size="sm" label="3 minutes ago" />
             </div>
        </div>
    );
};

export default QuestionItem;
