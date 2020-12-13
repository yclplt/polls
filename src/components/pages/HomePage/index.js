import React, { useEffect,useState } from 'react';
import  { QuestionBox} from '../../index';
import axios from 'axios';

const classNames = require('classnames');

const HomePage = () => {
    const className = classNames({
        'pl-homepage': true,
    });

    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        axios.get(`https://polls.apiblueprint.org/questions`)
        .then(res => {
            setQuestionList(res.data);
        })
    }, [])

    return (
        <div className={className}>
             <QuestionBox data={questionList} />
        </div>
    );
};
  
export default HomePage;
