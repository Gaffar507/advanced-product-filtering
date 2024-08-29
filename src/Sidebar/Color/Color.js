import React from 'react';
import Input from '../../Components/Input/Input';
import './Color.css';
const Color = ({ handleChange }) => {
    return (
        <div className="category-container">
            <h3 className="category-title">Color</h3>

            <div className="category-items">
                <Input handleChange={handleChange} name="color" id="color1" type="all" />
                <Input handleChange={handleChange} name="color" id="color6" type="white" />
                <Input handleChange={handleChange} name="color" id="color3" type="red" />
                <Input handleChange={handleChange} name="color" id="color4" type="green" />
                <Input handleChange={handleChange} name="color" id="color5" type="blue" />
                <Input handleChange={handleChange} name="color" id="color2" type="black" />
            </div>
        </div>
    );
};

export default Color;
