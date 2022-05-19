import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bike from '../Bike/Bike';
import './Bikes.css';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://guarded-tundra-28077.herokuapp.com/bike')
            .then((response) => response.json())
            .then(data => setBikes(data));
    }, [])
    return(
        <div id="bikes">
            <h2 className="text-center text-info fw-bold my-5">Bike Inventory</h2>
            <div className="bikes-container">
                {
                    bikes.slice(0, 6).map(bike => <Bike
                        key={bike._id}
                        bike={bike}
                    ></Bike>)
                }
            </div>
            <div>
            <button className="btn btn-info my-5 py-2 px-4 d-block mx-auto "><Link to={'/manage'} className='pe-auto text-decoration-none text-white fs-5'>Manage Items</Link></button>
            </div>
        </div>
    );
};

export default Bikes;