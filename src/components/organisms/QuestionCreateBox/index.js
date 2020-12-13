import React from 'react';
import  {CreateHeader , CreateFooter, ChoiseItem } from '../../index';

const QuestionCreateBox= ({choices,choiceTypeChange,addChoice,addPoll,choiceValue,deleteChoice, questionTypeChange, question}) => {
    return (
        <div className="pl-question-box">
             <CreateHeader question={question} questionTypeChange={questionTypeChange} choiceTypeChange={choiceTypeChange} choiceValue={choiceValue} addChoice={addChoice} />
             {choices && choices.map((item,key) => {
                 return  <ChoiseItem key={key} deleteChoice={deleteChoice} data={{"choice": item}} />
              })
             }
            <CreateFooter visible={!choices.length>0 ? "visible": ""} addPoll={addPoll} />
        </div>
    );
};

export default QuestionCreateBox;
