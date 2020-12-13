import React, {useEffect, useState} from 'react';
import  {DetailHeader , ChoiseItem, DetailFooter } from './../../index';
const classNames = require('classnames');
import axios from 'axios';

const QuestionDetail= ({data}) => {
    const className = classNames({
        'pl-question-box': true,
    });

    const [selectedChoise, setSelectedChoise] = useState()
    const [isVote, setIsVote] = useState(false);

    const selectChoice = (choice) =>{
        console.log(choice)
        setSelectedChoise(choice)
    }

    const sendVote = () => {
        console.log(selectedChoise)
        axios.post(`https://polls.apiblueprint.org${selectedChoise.url}`, {selectedChoise})
        .then(res => {
            if(res && res.statusText=== "Created"){
                setIsVote(true);
            }
        })
    }
    
    return (
        <div className={className}>
             <DetailHeader data={data} />
             {data.choices && data.choices.map((item,key) => {
                 return  <ChoiseItem key={key} voteStatus={isVote} onClick={()=>selectChoice(item)} data={item} />
              })
             }
            <DetailFooter onClick={sendVote} visible={isVote} data={selectedChoise?selectedChoise:null} />
        </div>
    );
};

export default QuestionDetail;
