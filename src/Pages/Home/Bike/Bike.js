import React from 'react';

const Bike = ({bike}) => {
    const {id, name, price, description, quality, supplier, img} = bike;
    return (
        <div>
            <img  src={img} alt=""/>
            <h2> This is bike:{name}</h2>
        </div>
    );
};

export default Bike;