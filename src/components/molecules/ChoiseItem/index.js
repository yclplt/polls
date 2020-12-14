import React from 'react';
import  { Text, TextProps, Badge,BadgeProps} from './../../index';

const ChoiseItem = ({data , onClick, voteStatus=true,deleteChoice,selected}) => {

    const {choice,votes } = data;
  
    return (
         <div className={`pl-choise-item ${selected?"selected":""}`} onClick={!voteStatus?onClick:null}>
           {!voteStatus &&
               <>
                 <Text position={TextProps.position.left}  position={TextProps.size.sm} label={choice} />
                 {deleteChoice && <Badge color={BadgeProps.color.red} label="Delete" onClick={val=>deleteChoice(choice)}  /> }
               </> 
            }
           {voteStatus && 
                <>
                    <Text position={TextProps.position.left} position={TextProps.size.md} label={choice} />
                    {!deleteChoice ? 
                     <Badge label={`${selected ? votes + 1 : votes} Votes`} /> :
                     <Badge label="Delete" color={BadgeProps.color.red} onClick={val=>deleteChoice(choice)}  />
                     }
                </>
            }
         </div>
    );
};

export default ChoiseItem;
