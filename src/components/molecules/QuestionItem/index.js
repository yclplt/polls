import React from 'react';
import  { Text} from './../../index';
import Link from 'next/link'
import momet from 'moment'

const QuestionItem = ({data}) => {

    const {question,published_at,url } = data;
    let date = momet(published_at).fromNow();
    return (
        <Link  href={url}>
            <div  className="pl-question-item">
                <div className="pl-question-row">
                    <Text position="left" color="white" size="md" label={question} />
                </div>
                <div className="pl-question-row">
                    <Text position="left" color="white" size="sm" label={date} />
                </div>
            </div>
        </Link>
    );
};

export default QuestionItem;
