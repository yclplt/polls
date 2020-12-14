import React from 'react';
import  { Button,ButtonProps} from '../../index';

const DetailFooter = ({onClick,visible}) => {
    return (
            <div className="pl-footer-header">
                 <Button color={ButtonProps.color.green} visible={visible&&"visible"} onClick={onClick} position={ButtonProps.position.right}   size="sm" label="Send Vote" />
            </div>
    );
};

export default DetailFooter;
