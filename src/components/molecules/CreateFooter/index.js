import React from 'react';
import  { Button,ButtonProps} from './../../index';

const CreateFooter = ({addPoll, visible}) => {
    return (
        <div className="pl-main-footer">
             <Button onClick={addPoll} visible={visible} color={ButtonProps.color.green} position={ButtonProps.position.right} label="Create Poll" />
        </div>
    );
};

export default CreateFooter;
