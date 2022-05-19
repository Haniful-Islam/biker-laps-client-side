import React from 'react';
import { Link } from 'react-router-dom';

const MyItems = () => {
    return (
        <div className="my-5 text-center w-100 ">
            <button className="btn btn-info my-5 mx-2 py-2 px-5 text-white fs-5"><Link className="pe-auto text-decoration-none text-white" to ="/all-items">All Items</Link></button>
            <button className="btn btn-info my-5 mx-2 py-2 px-5 text-white fs-5"><Link className="pe-auto text-decoration-none text-white" to ="/addbike">Add Items</Link></button>
            <button className="btn btn-info my-5 py-2 px-5 text-white fs-5"><Link className="pe-auto text-decoration-none text-white" to ="/manage">Manage Items</Link></button>
            
        </div>
    );
};

export default MyItems;