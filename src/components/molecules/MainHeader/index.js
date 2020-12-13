import React from 'react';
import  { Text, Button} from './../../index';
import Link from 'next/link'
const classNames = require('classnames');

const MainHeader = () => {
    const className = classNames({
        'pl-main-header': true,
    });
    return (
        <div className={className}>
             <Text position="left" color="white" size="lg" label="Polls" />
             <Link href="/question-create">
                 <Button position="right" type="primary" label="Create Polls" />
             </Link>
        </div>
    );
};

export default MainHeader;
