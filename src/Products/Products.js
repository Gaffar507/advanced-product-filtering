import React from 'react';
import './Products.css';
import Card from './../Components/Card/Card';
const Products = ({ products }) => {
    return <div className="card-container">{products ? products.map((item, index) => <Card key={index} {...item} />) : ''}</div>;
};

export default Products;
