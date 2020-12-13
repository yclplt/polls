import React from 'react';
import  {DetailHeader , ChoiseItem, DetailFooter } from './../../index';

const QuestionDetail= ({data, selectedChoise, selectChoice, sendVote,isVote}) => { 
    return (
        <div className="pl-question-box">
             <DetailHeader voteStatus={isVote} data={data} />
             {data.choices && data.choices.map((item,key) => {
                 return  <ChoiseItem key={key} selected={selectedChoise?.choice === item.choice} voteStatus={isVote} onClick={()=>selectChoice(item)} data={item} />
              })
             }
            <DetailFooter onClick={sendVote} visible={isVote} data={selectedChoise?selectedChoise:null} />
        </div>
    );
};

export default QuestionDetail;
