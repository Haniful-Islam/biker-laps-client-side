import React from 'react';

const Bike = ({bike}) => {
    const {id, name, price, description, quality, supplier, img} = bike;
    return (
        <div>
            <img width="370" height="350" src={img} alt=""/>
            <h2 className="text-info">{name}</h2>
            <p>Price:${price}</p>
            <p>{description}</p>
            <h4>{quality}</h4>
            <h3>{supplier}</h3>
        </div>
    );
};

export default Bike;