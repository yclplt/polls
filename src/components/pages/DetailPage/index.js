import React, {useState} from 'react';
import  {QuestionDetail} from '../../index';
import axios from 'axios';

const DetailPage = (data) => {

    const [selectedChoise, setSelectedChoise] = useState()
    const [isVote, setIsVote] = useState(false);

    const selectChoice = (choice) =>{
        setSelectedChoise(choice)
    }

    const sendVote = () => {
        if(selectedChoise){
            axios.post(`https://polls.apiblueprint.org${selectedChoise.url}`, {selectedChoise})
            .then(res => {
                if(res && res.statusText === "Created"){
                    setIsVote(true);
                }
            })
        }else{
            alert("Please select choice!!!")
        }
    }

    return (
        <div className="pl-detail">
             <QuestionDetail isVote={isVote} selectedChoise={selectedChoise} selectChoice={selectChoice} sendVote={sendVote} data={data.data} />
        </div>
    );
};
  
export default DetailPage;
