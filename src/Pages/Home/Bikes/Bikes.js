import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes]  = useState([]);

    useEffect(() => {
        fetch('bikes.json')
        .then((response) => response.json())
        .then(data => setBikes(data));
    },[])
    return (
        <div>
            <h1>My bikes:{bikes.length}</h1>
            {
                bikes.map(bike =><Bike
                key = {bike.id}
                bike= {bike}
                ></Bike>)
            }
        </div>
    );
};

export default Bikes;