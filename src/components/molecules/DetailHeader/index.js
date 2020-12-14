import React from 'react';
import  { Text, TextProps, Badge, BadgeProps} from '../../index';
import momet from 'moment'
import Link from 'next/link'
const DetailHeader = ({data,voteStatus}) => {
    const {question, published_at} = data;

    let votesCount = 0;
    data.choices && data.choices.map(item => {
        if(item.votes> 0){
             votesCount +=item.votes;
        }
    })
    let date = momet(published_at).fromNow();
    return (
         <div className="pl-detail-header">
              <div className="pl-row h40">
                <Link href="/"><Badge type={BadgeProps.type.link}  label="< Home Page" position={BadgeProps.position.left} /></Link>
             </div>
             <Text position={TextProps.position.left} size="lg" label={question} />
             <div className="pl-row h40">
                 <Text position={TextProps.position.left} size={TextProps.size.sm} label={date} />
                 <Badge color={BadgeProps.color.purple} position={BadgeProps.position.right} label={`votes ${voteStatus ? votesCount + 1 : votesCount}`} />
             </div>
         </div>
    );
};

export default DetailHeader;
