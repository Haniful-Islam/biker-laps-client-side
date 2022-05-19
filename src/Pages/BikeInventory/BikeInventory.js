import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BikeInventory = () => {
    const { bikeId } = useParams();
    const [bike, setBike] = useState({});
    useEffect(() => {
        const url = ` https://guarded-tundra-28077.herokuapp.com/bike/${bikeId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [bikeId])


    const handleCarDeliveredQuantity = () => {
        let { name, _id, description, price, img, quantity, Supplier } = bike;
        if (quantity !== 0) {
            quantity = quantity - 1;
            const updateBike = { name, _id, description, price, img, quantity, Supplier };

            const url = ` https://guarded-tundra-28077.herokuapp.com/bike/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateBike)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setBike(data)
                    setBike(updateBike);

                })
        }
        else {
            alert('stock out')
        }
    }

    const handleCarUpdateQuantity = (event) => {
        event.preventDefault()
        let { name, _id, description, price, img, quantity, Supplier } = bike;

        const newUpdateQuantity = event.target.number.value;
        if (!newUpdateQuantity || newUpdateQuantity < 0) {
            alert('please Enter valid number');
        }
        else {
            quantity = parseInt(quantity) + parseInt(newUpdateQuantity);

            const updateBike = { name, _id, description, price, img, quantity, Supplier };
            setBike(updateBike);


            const url = ` https://guarded-tundra-28077.herokuapp.com/bike/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateBike)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => console.log(data));
            event.target.reset();
        }
    }


    return (
        <div className='bg-img-container'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="text-white bg-dark">
                            <div><img className='w-100' src={bike.img} alt="" /></div>
                            <div className="p-4">
                                <h1 className='text-center text-white mb-4'>{bike.name}</h1>
                                <p className='text-white text-center mb-4'>{bike.description}</p>
                                <div className='d-md-flex  justify-content-md-around text-center my-4'>
                                    <p className='card-text'>Price: <strong className='text-danger'>${bike.price}</strong></p>
                                    <p className='card-text'>Quantity: <strong className='text-danger'>{bike.quantity}</strong></p>
                                    <p className='card-text'>Supplier: <strong className='text-danger'>{bike.Supplier}</strong></p>
                                </div>
                                <div className='text-center mb-3'>
                                    <button onClick={handleCarDeliveredQuantity}  className='btn btn-info w-100'>Delivered</button>
                                </div>
                                <div>
                                    <h2 className='text-center text-white mb-4' >Update Quantity Stock</h2>
                                    <form  onSubmit={handleCarUpdateQuantity}>
                                        <input className='w-100 mb-4 p-2' type="number" name="number" placeholder='Enter Quantity...' />
                                        <br />
                                        <input className='w-100 btn btn-info' type="submit" value="Update Stock" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeInventory;