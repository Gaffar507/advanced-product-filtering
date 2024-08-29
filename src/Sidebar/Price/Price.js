import React from 'react';
import Input from '../../Components/Input/Input';
import './Price.css';
const Price = ({ handleChange }) => {
    return (
        <div className="category-container">
            <h3 className="category-title">Price</h3>

            <div className="category-items">
                <Input handleChange={handleChange} name="price" id="price1" value={0} type="all" />
                <Input handleChange={handleChange} name="price" id="price2" value={50} type="0 - 50" />
                <Input handleChange={handleChange} name="price" id="price3" value={100} type="50 - 100" />
                <Input handleChange={handleChange} name="price" id="price4" value={150} type="100 - 150" />
                <Input handleChange={handleChange} name="price" id="price5" value={200} type="over 150" />
            </div>
        </div>
    );
};

export default Price;
