import React from 'react';
import  {CreateHeader , CreateFooter, ChoiseItem } from '../../index';
const classNames = require('classnames');

const QuestionCreateBox= ({choices,choiceTypeChange,addChoice,addPoll,choiceValue,deleteChoice, questionTypeChange, question}) => {
    const className = classNames({
        'pl-question-box': true,
    });

    return (
        <div className={className}>
             <CreateHeader question={question} questionTypeChange={questionTypeChange} choiceTypeChange={choiceTypeChange} choiceValue={choiceValue} addChoice={addChoice} />
             {choices && choices.map((item,key) => {
                 return  <ChoiseItem key={key} deleteChoice={deleteChoice} data={{"choice": item}} />
              })
             }
            <CreateFooter addPoll={addPoll} />
        </div>
    );
};

export default QuestionCreateBox;
