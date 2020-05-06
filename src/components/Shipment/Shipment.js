import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { useAuth } from '../Login/useAuth';
const Shipment = () => {
        const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => console.log(data);
        const auth = useAuth()

        return (
          
          <form className = "Ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input name="name" 
            defaultValue={auth.user.name} 
            ref={register({ required: true })} 
            placeholder = "Your Name" />
            {
            errors.name && <span  className = "error">This field is required</span>
            }

            <input name="email" 
            defaultValue = {auth.user.email} 
            ref={register({ required: true })} 
            placeholder = "Your Email" />
            {
            errors.email && <span className = "error">This field is required</span>
            }

            <input name="AddressLine1" 
            ref={register({ required: true })} 
            placeholder = "Address Line 1" />
            {
            errors.AddressLine1 && <span className = "error">This field is required</span>
            }

            <input name="AddressLine2" 
            ref={register} 
            placeholder = "Address Line 2"/>

            <input name="City" 
            ref={register({ required: true })} 
            placeholder = "City Name" />
            {
            errors.City && <span className = "error">This field is required</span>
            }

            <input name="Country" 
            ref={register({ required: true })} 
            placeholder = "Country Name" />
            {
            errors.Country && <span className = "error">This field is required</span>
            }

            <input name="Zipcode" 
            ref={register({ required: true })} 
            placeholder = "Zip Code" />
            {
            errors.Zipcode && <span className = "error">This field is required</span>
            }
            
            <input type="submit" />
          </form>
        );
};

export default Shipment;