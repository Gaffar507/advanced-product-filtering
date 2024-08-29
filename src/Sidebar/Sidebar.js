import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import Color from './Color/Color';
import './Sidebar.css';
import { FaLuggageCart } from 'react-icons/fa';

const Sidebar = ({ handleChange }) => {
    return (
        <div className="sidebar">
            <div className="cart-icon">
                <FaLuggageCart className="icon" />
            </div>

            <div className="filter-type">
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Color handleChange={handleChange} />
            </div>
        </div>
    );
};

export default Sidebar;
