import React, {useEffect, useState} from 'react';
import  {QuestionItem , MainHeader} from './../../index';
const classNames = require('classnames');
import axios from 'axios';

const QuestionBox= () => {
    const [questionList, setQuestionList] = useState([]);
    const className = classNames({
        'pl-question-box': true,
    });

    useEffect(() => {
        axios.get(`https://polls.apiblueprint.org/questions`)
        .then(res => {
            setQuestionList(res.data);
        })
    }, [])

    return (
        <div className={className}>
             <MainHeader />
             {questionList && questionList.map(item => {
                   return <QuestionItem data={item} />
                 })
             }
             
        </div>
    );
};

export default QuestionBox;
