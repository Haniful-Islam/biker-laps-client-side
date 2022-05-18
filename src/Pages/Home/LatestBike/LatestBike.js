import React from 'react';

const LatestBike = ({ latestBike }) => {
    const { img } = latestBike;
    return (
        <div id='LatestBike' class="card" className="g-4 col- col-sm-12 col-lg-4 col-md-6">
            <div style={{ width: '18rem' }}>
                <img width="400" height="350" src={img} alt="..." />
            </div>
        </div>
    );
};

export default LatestBike;