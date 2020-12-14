import React,{useState} from 'react';
import  {QuestionCreateBox} from '../../index';
import axios from 'axios';
import Router from 'next/router'

const QuestionCreate = () => {
    
    const [choice, setChoice] = useState([])
    const [choiceText, setChoiceText] = useState("");
    const [questionText, setQuestionText] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const createChoice = () =>{
        if(choiceText.length>0){
            const checkCoice = choice.some(item => item === choiceText );
            if(!checkCoice){
                setChoice([...choice, choiceText]);
                setChoiceText("")
            }else{
                alert("Please add unique choice!!!")
            }
        }else{
            alert("Please type choice!!!")
        }
    }

    const deleteChoice = (val) =>{
         setChoice(choice.filter(item => item !== val));  
    }
    
    const createPoll= () =>{
        if(choice.length > 1){
            let data = JSON.stringify({
                question: questionText,
                choices: choice
            })
            axios.post(`https://polls.apiblueprint.org/questions?`,data,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log("red",res)
                if((res.status === 200 && res.statusText==="OK") || (res.status === 201 && res.statusText==="Created") ){
                    setIsCreated(true);
                    setTimeout(() => {
                        Router.push('/')
                    }, 1000);
                }else{
                    alert("There was an error, Please try again.")
                }
            })
        }else{
            alert("Please add more than 1 choice.")
        }
    }

    return (
        <div className="pl-question-create">
           {!isCreated ?  <QuestionCreateBox 
                 question={questionText}
                 questionTypeChange={val => setQuestionText(val)}
                 deleteChoice={val=>deleteChoice(val)}
                 addChoice={createChoice} 
                 addPoll={createPoll} 
                 choiceTypeChange={val => setChoiceText(val)}  
                 choiceValue={choiceText}
                 choices={choice} />
                 :
                 <div>Your polls has been successfully created.</div>
            }
        </div>
    );
};
  
export default QuestionCreate;
