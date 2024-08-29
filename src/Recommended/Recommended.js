import React from 'react';
import './Recommended.css';
import Button from '../Components/Button/Button';
const Recommended = ({ onClick }) => {
    return (
        <div className="recommended-container">
            <h2 className="r-title">Recommended</h2>
            <div className="r-items">
                <Button onClick={onClick} title="all products" />
                <Button onClick={onClick} title="nike" />
                <Button onClick={onClick} title="adidas" />
                <Button onClick={onClick} title="puma" />
                <Button onClick={onClick} title="vans" />
            </div>
        </div>
    );
};

export default Recommended;
