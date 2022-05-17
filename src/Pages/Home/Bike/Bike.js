import React from 'react';
import './Bike.css';

const Bike = ({bike}) => {
    const {id, name, price, description, quality, Supplier, img} = bike;
    return (
        <div className="single-bike">
            <img width="400" height="350" src={img} alt=""/>
            <h2 className="text-info my-2">{name}</h2>
            <p>Price:${price}</p>
            <p>{description}</p>
            <h5>Quality:<small className="text-info my-2">{quality}</small></h5>
            <h5>Supplier:<small className="text-info my-2">{Supplier}</small></h5>
            <button className="btn btn-info text-white my-2">Update</button>
        </div>
    );
};

export default Bike;