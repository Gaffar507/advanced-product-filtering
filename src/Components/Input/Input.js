import React from 'react';
import './Input.css';

const Input = ({ handleChange, name, id, type, value }) => {
    return (
        <div className="item">
            <input type="radio" name={name} id={id} value={value ? value : type} onChange={(e) => handleChange(e)} />
            <label htmlFor={id} style={{ color: type === 'white' ? 'grey' : `${type}` }}>
                {type}
            </label>
        </div>
    );
};

export default Input;
