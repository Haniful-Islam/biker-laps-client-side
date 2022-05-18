import React, { useEffect, useState } from 'react';
import Bike from '../Home/Bike/Bike';
import './AllItems.css';



const AllItem = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/bike';
        fetch(url)
            .then((response) => response.json())
            .then(data => setBikes(data));
    }, [])
    return (
        <div>
            <h2 className="text-center text-info my-4">All Items</h2>
            <div className="all-items-container">
            {
                bikes.map(bike => <Bike
                    key={bike._id}
                    bike={bike}
                >
                </Bike>)
            }
            </div>
        </div>
    );
};

export default AllItem;