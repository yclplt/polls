import React from 'react';
import  { Text, Badge} from './../../index';
const classNames = require('classnames');

const ChoiseItem = ({data , onClick, voteStatus}) => {
    const className = classNames({
        'pl-choise-item': true,
    });
    const {choice,votes } = data;

    return (
         <div className={className} onClick={!voteStatus?onClick:null}>
           {!voteStatus && <Text position="left" color="white" size="md" label={choice} />}
           {voteStatus && 
                <>
                    <Text position="left" color="white" size="md" label={choice} />
                    <Badge label={`${votes} Votes`} />
                </>
            }
         </div>
    );
};

export default ChoiseItem;
