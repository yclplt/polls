import React from 'react';
import  { Text, Textarea,Button,Badge} from '../../index';
import Link from 'next/link'

const CreateHeader = ({choiceValue,choiceTypeChange,addChoice,question, questionTypeChange}) => {
    return (
        <div className="pl-create-header">
             <div className="pl-row h40">
                <Link href="/"><Badge type="link" label="< Home Page" position="left"/></Link>
             </div>
             <Text position="left" color="white" size="lg" label="Create Poll" />
             <div className="h40">
                <Text position="left" color="white" size="sm" label="write your question (*)" />
             </div>
             <Textarea value={question} onChange={questionTypeChange}></Textarea>
             <div className="mt-10">
                <Text position="left" color="white" size="sm" label="write your choice (*)" />
            </div>
             <div className="pl-row h40 w100">
                <Textarea value={choiceValue} onChange={choiceTypeChange}></Textarea>
                <Button onClick={addChoice} type="secondary" position="right" color="white" size="sm" label="Add Choice" />
             </div>
        </div>
    );
};

export default CreateHeader;
