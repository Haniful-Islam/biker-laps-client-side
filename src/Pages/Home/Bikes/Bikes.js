import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bike')
            .then((response) => response.json())
            .then(data => setBikes(data));
    }, [])
    return(
        <div id="bikes">
            <h2 className="text-center text-info fw-bold my-5">Bike Inventory</h2>
            <div className="bikes-container">
                {
                    bikes.map(bike => <Bike
                        key={bike._id}
                        bike={bike}
                    ></Bike>)
                }
            </div>
        </div>
    );
};

export default Bikes;