import React from 'react';
import  {QuestionItem , MainHeader} from './../../index';
const classNames = require('classnames');

const QuestionBox= () => {
    const className = classNames({
        'pl-question-box': true,
    });
    return (
        <div className={className}>
             <MainHeader />
             <QuestionItem />
        </div>
    );
};

export default QuestionBox;
