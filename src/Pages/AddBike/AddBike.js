
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddBike = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const userName = user.displayName;
    const email = user.email;
    const onSubmit = data => {
        console.log(data);
        const url = `https://guarded-tundra-28077.herokuapp.com/bike`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className="w-50 mx-auto border border-info p-5 my-5 rounded-3">
            <h3 className="text-center text-info mb-3">Please add a new Item</h3>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>

                <input className="mb-2 form-control" value={userName} placeholder="Your name..." {...register("userName")} />
                <input className="mb-2 form-control" value={email} placeholder="Email" {...register("email")} />
                <input className="mb-2 form-control" placeholder="product name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className="mb-2 form-control" placeholder="Description..." {...register("description")} />
                <input className="mb-2 form-control" placeholder="Price" type="number" {...register("price")} />
                <input className="mb-2 form-control" placeholder="Quantity" type="number" {...register("quantity")} />
                <input className="mb-2 form-control" placeholder="Supplier" type="text" {...register("Supplier")} />
                <input className="mb-2 form-control" placeholder="Photo URL" type="text" {...register("img")} />
                <input type="submit" value="Add Item" className="btn btn-info text-white" />
            </form>
        </div>
    );
};

export default AddBike;