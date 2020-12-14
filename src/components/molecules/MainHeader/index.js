import React from 'react';
import  { Text,TextProps,  Button, ButtonProps} from './../../index';
import Link from 'next/link'
const classNames = require('classnames');

const MainHeader = () => {
    const className = classNames({
        'pl-main-header': true,
    });
    return (
        <div className={className}>
             <Text position={TextProps.position.left}  size={TextProps.size.lg} label="Polls" />
             <Link href="/question-create">
                 <Button color={ButtonProps.color.green}  position={ButtonProps.position.right} type={ButtonProps.color.primary}  label="Create Polls" />
             </Link>
        </div>
    );
};

export default MainHeader;
