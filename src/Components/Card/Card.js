import React from 'react';
import './Card.css';
import { BsBagHeartFill } from 'react-icons/bs';

const Card = ({ img, title, newPrice, prevPrice, star, reviews }) => {
    return (
        <div className="card">
            <img src={img} alt="shoe" className="card-img" />

            <h3 className="card-title">{title}</h3>

            <div className="rating">
                {star.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                <span>{reviews}</span>
            </div>

            <div className="price">
                <span className='new-price'>
                    <del className="delete">{prevPrice}</del>${newPrice}
                </span>
                <span>
                    <BsBagHeartFill />
                </span>
            </div>
        </div>
    );
};

export default Card;
