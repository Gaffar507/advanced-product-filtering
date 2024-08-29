import React from 'react';
import './Category.css';
import Input from '../../Components/Input/Input';

const Category = ({ handleChange }) => {
    return (
        <div className="category-container">
            <h3 className="category-title">Category</h3>
            <div className="category-items">
                <Input handleChange={handleChange} name="item" id="1" type="all" />
                <Input handleChange={handleChange} name="item" id="2" type="sneakers" />
                <Input handleChange={handleChange} name="item" id="3" type="flats" />
                <Input handleChange={handleChange} name="item" id="4" type="sandals" />
                <Input handleChange={handleChange} name="item" id="5" type="heels" />
            </div>
        </div>
    );
};

export default Category;
