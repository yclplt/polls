import React from 'react';
import  { Text, Badge} from './../../index';
const classNames = require('classnames');
import Link from 'next/link'
const QuestionItem = ({data}) => {
    const className = classNames({
        'pl-question-item': true,
    });

    const {question,published_at,choices,url } = data;

    return (
        <Link href={url}>
            <div className={className}>
                <div className="pl-question-row">
                    <Text position="left" color="white" size="md" label={question} />
                    <Badge position="right" type="primary" label="100 Votes"></Badge>
                </div>
                <div className="pl-question-row">
                    <Text position="left" color="white" size="sm" label={published_at} />
                </div>
            </div>
        </Link>
    );
};

export default QuestionItem;
