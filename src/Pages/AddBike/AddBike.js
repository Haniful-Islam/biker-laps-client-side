
import React from 'react';
import { useForm } from "react-hook-form";

const AddBike = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/bike`;
        fetch(url,{
          method: 'POST',
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(data)  
        })
        .then(response =>response.json())
        .then(result => {
            console.log(result)
        })
    }
    return (
        <div className="w-50 mx-auto border border-info p-5 mt-5 rounded-3">
            <h3 className="text-center text-info mb-3">Please add a new bike</h3>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2 form-control" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className="mb-2 form-control" placeholder="Description..." {...register("description")} />
                <input  className="mb-2 form-control" placeholder="Price" type="number" {...register("price")} />
                <input className="mb-2 form-control" placeholder="Quantity" type="number" {...register("quantity")} />
                <input className="mb-2 form-control" placeholder="Supplier" type="text" {...register("supplier")} />
                <input className="mb-2 form-control" placeholder="Photo URL" type="text" {...register("img")} />
                <input type="submit" value="Add Bike" className="btn btn-info text-white" />
            </form>
        </div>
    );
};

export default AddBike;