import React from 'react';
import  { Button} from './../../index';

const CreateFooter = ({addPoll}) => {
    return (
        <div className="pl-main-footer">
             <Button onClick={addPoll} color="green" position="right" color="white" size="sm" label="Create Poll" />
        </div>
    );
};

export default CreateFooter;
