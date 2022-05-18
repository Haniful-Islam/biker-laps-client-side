import React from 'react';
import useBikes from '../../hooks/useBikes';


const ManageBikes = () => {
    const [bikes, setBikes] = useBikes();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed){
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
        <div>
            <h3>This is manage bikes</h3>
            {
                bikes.map((bike) => <div key={bike._id}>
                    <div>
                        <div>
                            <h5>{bike.name}</h5>
                        </div>
                        <div>
                            <button onClick={() =>handleDelete(bike._id)} className="btn btn-info text-white">delete</button>
                        </div>

                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageBikes;