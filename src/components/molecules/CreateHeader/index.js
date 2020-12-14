import React from 'react';
import  { Text, TextProps, Textarea ,Button, ButtonProps, Badge, BadgeProps} from '../../index';
import Link from 'next/link'

const CreateHeader = ({choiceValue,choiceTypeChange,addChoice,question, questionTypeChange}) => {
    return (
        <div className="pl-create-header">
             <div className="pl-row h40">
                <Link href="/">
                     <Badge type={BadgeProps.type.link} label="< Home Page" position={BadgeProps.position.left} />
                 </Link>
             </div>
             <Text position={TextProps.position.left} size={TextProps.size.lg} label="Create Poll" />
             <div className="h40">
                <Text position={TextProps.position.left}  size={TextProps.size.sm} label="write your question (*)" />
             </div>
             <Textarea value={question} onChange={questionTypeChange}></Textarea>
             <div className="mt-10">
                <Text position={TextProps.position.left} size={TextProps.size.sm} label="write your choice (*)" />
            </div>
             <div className="pl-row h40 w100">
                <Textarea value={choiceValue} onChange={choiceTypeChange}></Textarea>
                <Button onClick={addChoice} type={ButtonProps.type.secondary} position={ButtonProps.position.left} size={ButtonProps.size.sm} label="Add Choice" />
             </div>
        </div>
    );
};

export default CreateHeader;
