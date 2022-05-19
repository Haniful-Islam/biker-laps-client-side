import React from 'react';
import servicing1 from '../../../images/servicing-images/servicing1.jpg'
import './BikeServicing.css';

const BikeServicing = () => {
    return (
           <div id="bikeservicing">
            <h2 className="text-center text-info servicing-title">Bike Servicing</h2>
            <div className="bike-servicing container">
                <div className="img-part">
                    <img src={servicing1} alt="" />
                </div>
                <div className="w-75 mx-auto">
                    <h2 className="text-info">How do you do a basic bike service?</h2>
                    <p className="fs-5"> Your bike servicing guide lays special impetus on the inspection of the engine; after all, the engine is the heart of the bike. Your bike can run smoothly only if the engine is properly maintained and serviced. It also increases fuel efficiency and reduces the money you spend on petrol.</p>
                    <button className="btn btn-info text-white rounded-2">Read More...</button>
                </div>
            </div>
        </div>
    );
};

export default BikeServicing;