import React from 'react';
import PropTypes from 'prop-types';
import BadgeProps from './props';

const classNames = require('classnames');

const Badge = ({label, position, type, color, size,onClick}) => {
    const className = classNames({
        'pl-badge': true,
        [color]: color,
        [position]:position,
        [size]:size,
        [type]:type
    });
    return (
     <div className={className} onClick={onClick}>{label}</div>
    );
};


Badge.propTypes = {
    label: PropTypes.string.isRequired,
    position: PropTypes.oneOf([BadgeProps.position.bottom, BadgeProps.position.top, BadgeProps.position.left, BadgeProps.position.right]),
    size: PropTypes.oneOf([BadgeProps.size.xs, BadgeProps.size.sm, BadgeProps.size.md, BadgeProps.size.lg, BadgeProps.size.xl]),
    type: PropTypes.string,
    color: PropTypes.oneOf([BadgeProps.color.red, BadgeProps.color.purple, BadgeProps.position.green])
};
Badge.defaultProps = {
    position: BadgeProps.position.left,
    size: BadgeProps.size.lg,
    type: 'primary',
};

export default Badge;
