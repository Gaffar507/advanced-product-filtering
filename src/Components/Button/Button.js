import React from 'react';
import './Button.css';

const Button = ({ onClick, title }) => {
    return (
        <button className="btn" value={title} onClick={(e) => onClick(e)}>
            {title}
        </button>
    );
};

export default Button;
