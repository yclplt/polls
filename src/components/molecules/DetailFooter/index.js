import React from 'react';
import  { Button} from '../../index';

const DetailFooter = ({onClick}) => {
    return (
            <div className="pl-footer-header">
                 <Button color="green" onClick={onClick} position="right"  size="sm" label="Send Vote" />
            </div>
    );
};

export default DetailFooter;
