import React from 'react';
import { useParams } from 'react-router-dom';

const BikeInventory = () => {
    const {bikeId} = useParams();

    return (
        <div>
            <h2>This is Bike inventory details:{bikeId}</h2>
        </div>
    );
};

export default BikeInventory;