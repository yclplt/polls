import React from 'react';
import PropTypes from 'prop-types';
import TextProps from './props';

const classNames = require('classnames');

const Text = ({label, position, type, color, size}) => {
    const className = classNames({
        'pl-text': true,
        [position]: position,
        [type]: type,
        [color]: color,
        [size]: size,
    });
    return (
     <div className={className}>{label}</div>
    );
};

Text.propTypes = {
    label: PropTypes.string.isRequired,
    position: PropTypes.oneOf([TextProps.position.bottom, TextProps.position.top, TextProps.position.left, TextProps.position.right]),
    size: PropTypes.oneOf([TextProps.size.xs, TextProps.size.sm, TextProps.size.md, TextProps.size.lg, TextProps.size.xl]),
    type: PropTypes.string,
    color: PropTypes.string,
};
Text.defaultProps = {
    position: TextProps.position.left,
    size: TextProps.size.lg,
    type: 'primary',
};

export default Text;
