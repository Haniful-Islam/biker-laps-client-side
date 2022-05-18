import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css';

const Bike = ({ bike }) => {
    const {_id, name, price, description, quantity, supplier, img } = bike;
    const navigate = useNavigate();

    const navigateToBikeDetail = id => {
        navigate(`/bike/${id}`);
    }
    return (
        <div className="single-bike">
            <img width="400" height="350" src={img} alt="" />
            <h2 className="text-info my-2">{name}</h2>
            <p>Price:${price}</p>
            <p>{description}</p>
            <h5>Quality:<small className="text-info my-2">{quantity}</small></h5>
            <h5>Supplier:<small className="text-info my-2">{supplier}</small></h5>
            <button onClick={() => navigateToBikeDetail(_id)} className="btn btn-info text-white my-2">Update</button>
        </div>
    );
};

export default Bike;