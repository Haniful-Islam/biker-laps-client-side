import React from 'react';
import bike1 from '../../../images/new-bike/bike1.jpg';
import bike2 from '../../../images/new-bike/bike2.jpg';
import bike3 from '../../../images/new-bike/bike3.jpg';
import bike4 from '../../../images/new-bike/bike4.jpg';
import bike5 from '../../../images/new-bike/bike5.jpg';
import bike7 from '../../../images/new-bike/bike7.jpg';
import LatestBike from '../LatestBike/LatestBike';


const latestBikes = [
    { id: 1, name: "", img: bike1 },
    { id: 2, name: "", img: bike2 },
    { id: 3, name: "", img: bike3 },
    { id: 4, name: "", img: bike4 },
    { id: 5, name: "", img: bike5 },
    { id: 6, name: "", img: bike7 },
]

const LatestBikes = () => {
    return (
        <div className="container">
            <h2 className="text-info text-center mt-5">Latest Bike Collection</h2>
            <div className="row">
                {
                    latestBikes.map(latestBike => <LatestBike
                        key={latestBike.id}
                        latestBike={latestBike}
                    ></LatestBike>)
                }
            </div>
        </div>
    );
};

export default LatestBikes;