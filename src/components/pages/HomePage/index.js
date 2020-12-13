import React, { useEffect,useState } from 'react';
import  { QuestionBox} from '../../index';
import axios from 'axios';

const HomePage = () => {

    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        axios.get(`https://polls.apiblueprint.org/questions`)
        .then(res => {
            setQuestionList(res.data);
        })
    }, [])

    return (
        <div className="pl-homepage">
             <QuestionBox data={questionList} />
        </div>
    );
};
  
export default HomePage;
