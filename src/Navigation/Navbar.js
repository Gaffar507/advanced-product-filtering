import React from 'react';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import './Navbar.css';
const Navbar = ({ getValue }) => {
    return (
        <nav className="navbar-container">
            <div className="search">
                <input type="search" className="search-bar" placeholder="search by name" onChange={(e)=>getValue(e)} />
            </div>
            <div className="links">
                <a href="#">
                    <FiHeart className="icon" />
                </a>
                <a href="#">
                    <AiOutlineShopping className="icon" />
                </a>
                <a href="#">
                    <AiOutlineUser className="icon" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
