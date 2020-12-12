import React from 'react';
import  { QuestionBox} from '../../index';
const classNames = require('classnames');

const HomePage = () => {
    const className = classNames({
        'pl-homepage': true,
    });
    return (
        <div className={className}>
             <QuestionBox />
        </div>
    );
};

export default HomePage;
