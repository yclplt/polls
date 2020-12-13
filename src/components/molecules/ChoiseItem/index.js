import React from 'react';
import  { Text, Badge} from './../../index';

const ChoiseItem = ({data , onClick, voteStatus=true,deleteChoice,selected}) => {

    const {choice,votes } = data;
  
    return (
         <div className={`pl-choise-item ${selected?"selected":""}`} onClick={!voteStatus?onClick:null}>
           {!voteStatus &&
               <>
                 <Text position="left" color="white" size="md" label={choice} />
                 {deleteChoice && <Badge color="red" label="Delete" onClick={val=>deleteChoice(choice)}  /> }
               </> 
            }
           {voteStatus && 
                <>
                    <Text position="left" color="white" size="md" label={choice} />
                    {!deleteChoice ? 
                     <Badge label={`${selected ? votes + 1 : votes} Votes`} /> :
                     <Badge label="Delete" color="red" onClick={val=>deleteChoice(choice)}  />
                     }
                </>
            }
         </div>
    );
};

export default ChoiseItem;
