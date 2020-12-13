import React from 'react';
import  { Button} from '../../index';

const DetailFooter = ({onClick,visible}) => {
    return (
            <div className="pl-footer-header">
                 <Button color="green" visible={visible&&"visible"} onClick={onClick} position="right"  size="sm" label="Send Vote" />
            </div>
    );
};

export default DetailFooter;
