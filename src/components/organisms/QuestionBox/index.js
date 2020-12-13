import React from 'react';
import  {QuestionItem , MainHeader} from './../../index';

const QuestionBox= ({data}) => {
    return (
        <div className="pl-question-box">
             <MainHeader />
             {data && data.map( (item,key) => {
                   return <QuestionItem key={key} data={item} />
                 })
             }
             
        </div>
    );
};

export default QuestionBox;
