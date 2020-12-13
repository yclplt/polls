import React from 'react';
import  { Text, Badge} from '../../index';
import momet from 'moment'
const DetailHeader = ({data}) => {
    const {question, published_at} = data;

    let votesCount = 0;
     data.choices.map(item => {
        if(item.votes> 0){
             votesCount +=item.votes;
        }
    })
    let date = momet(published_at).fromNow();
    return (
         <div className="pl-detail-header">
             <Text position="left" color="white" size="lg" label={question} />
             <div className="pl-row">
                 <Text position="left" color="white" size="sm" label={date} />
                 <Badge position="right" label={`votes ${votesCount}`} />
             </div>
         </div>
    );
};

export default DetailHeader;
