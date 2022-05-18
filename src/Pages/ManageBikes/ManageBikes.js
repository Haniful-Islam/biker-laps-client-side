import React from 'react';
import { Table } from 'react-bootstrap';
import useBikes from '../../hooks/useBikes';


const ManageBikes = () => {
    const [bikes, setBikes] = useBikes();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/bike/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = bikes.filter(bike => bike._id !== id);
                    setBikes(remaining);
                })
        }
    }
    return (
        <div className='my-5'>
            <div className='container'>
                <h2 className='text-center text-info mb-4'>Manage your items</h2>
                <div className="row text-white">
                    <div className="col-12">
                        <div className=''>
                            <Table striped bordered hover responsive variant="info">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price/$</th>
                                        <th>Quantity</th>
                                        <th>Supplier</th>
                                        <th>Image</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bikes.map(bike => {
                                            return (
                                                <tr key={bike._id}>
                    
                                                    <td>{bike.name}</td>
                                                    <td>${bike.price}</td>
                                                    <td>{bike.quantity}</td>
                                                    <td>{bike.supplier}</td>
                                                    <td><img className='' style={{ width: '100px' }} src={bike.img} alt="" /></td>
                                                    <td><button className='btn btn-info text-danger' onClick={() => handleDelete(bike._id)}>Delete</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageBikes;