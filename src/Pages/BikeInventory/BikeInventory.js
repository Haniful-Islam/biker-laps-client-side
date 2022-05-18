import React from 'react';
import { useParams } from 'react-router-dom';

const BikeInventory = () => {
    const {bikeId} = useParams();

    return (
        <div>
            <button className="w-25 mx-auto mt-5 text-white btn btn-info">Devliverd</button>

            {/* <div className='bg-img-container'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="text-white bg-dark">
                            <div><img className='w-100' src={img} alt="" /></div>
                            <div className="p-4">
                                <h1 className='text-center text-white mb-4'>{name}</h1>
                                <p className='text-white text-center mb-4'>{description}</p>
                                <div className='d-md-flex  justify-content-md-around text-center my-4'>
                                    <p className='card-text'>Price: <strong className='text-danger'>${price}</strong></p>
                                    <p className='card-text'>Quantity: <strong className='text-danger'>{quantity}</strong></p>
                                    <p className='card-text'>Supplier: <strong className='text-danger'>{Supplier}</strong></p>
                                </div>
                                <div className='text-center mb-3'>
                                    <button className='btn btn-danger w-100'>Delivered</button>
                                </div>
                                <div>
                                    <h2 className='text-center text-white mb-4' >Update Quantity Stock</h2>
                                    <form>
                                        <input className='w-100 mb-4 p-2' type="number" name="number" placeholder='Enter Quantity...' />
                                        <br />
                                        <input className='w-100 btn btn-danger' type="submit" value="Update Stock" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    );
};

export default BikeInventory;