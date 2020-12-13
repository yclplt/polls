import React from 'react';
import  {QuestionDetail} from '../../index';

const classNames = require('classnames');

const DetailPage = (data) => {
    const className = classNames({
        'pl-detail': true,
    });

    return (
        <div className={className}>
             <QuestionDetail data={data.data} />
        </div>
    );
};
  
export default DetailPage;
