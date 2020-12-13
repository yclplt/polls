import React from 'react';
import  { Text, Textarea,Button} from '../../index';

const CreateHeader = ({choiceValue,choiceTypeChange,addChoice,question, questionTypeChange}) => {
    return (
        <div className="pl-create-header">
             <Text position="left" color="white" size="lg" label="Create Poll" />
             <Text position="left" color="white" size="sm" label="write your question (*)" />
             <Textarea value={question} onChange={questionTypeChange}></Textarea>
             <Text position="left" color="white" size="sm" label="write your choice (*)" />
             <Textarea value={choiceValue} onChange={choiceTypeChange}></Textarea>
             <Button onClick={addChoice} position="right" color="white" size="sm" label="Add Choice" />
        </div>
    );
};

export default CreateHeader;
