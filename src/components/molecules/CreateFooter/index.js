import React from 'react';
import  { Button} from './../../index';

const CreateFooter = ({addPoll, visible}) => {
    return (
        <div className="pl-main-footer">
             <Button onClick={addPoll} visible={visible} color="green" position="right" label="Create Poll" />
        </div>
    );
};

export default CreateFooter;
