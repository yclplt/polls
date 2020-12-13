import React, {useEffect, useState} from 'react';
import  {QuestionItem , MainHeader} from './../../index';
const classNames = require('classnames');

const QuestionBox= ({data}) => {
    const className = classNames({
        'pl-question-box': true,
    });

    return (
        <div className={className}>
             <MainHeader />
             {data && data.map( (item,key) => {
                   return <QuestionItem key={key} data={item} />
                 })
             }
             
        </div>
    );
};

export default QuestionBox;
