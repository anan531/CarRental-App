import axios from "axios"
import { useState } from "react"
import Navigation from "./Navigation"

const AddCar = () => {


    
    const[input,changeInput] = useState(

            {

                "registration_number":"",
                "brand":"",
                "model":"",
                "vehicle_type":"",
                "fuel_type":"",
                "transmission":"",
                "seating_capacity":"",
                "rent_per_day":"",
                "city":"",
                "availability_status":""

            }
        )

            const inputHandler = (event) =>{


                    changeInput({...input,[event.target.name]:event.target.value})
            }


            const readValue = () => {

                    console.log(input)

                    axios.post("https://host-demo-app.onrender.com/api/add-car",input).then(

                        (response) => {


                            console.log(response.data)

                            alert("Car added succesfully")

                        }

                    ).catch(

                        (error) => {


                            console.error("Error adding car:",error)

                            alert("Failed to add car")


                        }

                    )


            }



  return (




    <div>
<Navigation/>
<h1 align="center">Add Car Form</h1>

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Registration Number</label>
<input type="text" className="form-control" name="registration_number" value={input.registration_number} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Brand</label>
<input type="text" className="form-control" name="brand" value={input.brand} onChange={inputHandler}/>

        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-label">Model</label>
<input type="tel" className="form-control" name="model" value={input.model} onChange={inputHandler}/>


        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Vehicle Type</label>
<select id="" className="form-control" name="vehicle_type" value={input.vehicle_type} onChange={inputHandler}>
    <option value ="Hatchback" className="options">Hatchback</option>
    <option value ="Sedan" className="options">Sedan</option>
    <option value ="SUV" className="options">SUV</option>
    <option value ="MUV" className="options">MUV</option>
    <option value ="Luxury" className="options">Luxury</option>
</select>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Fuel Type</label>

<select id="" className="form-control" name="fuel_type" value={input.fuel_type} onChange={inputHandler}>
    <option  value="Petrol" className="options">Petrol</option>
    <option value="Diesel" className="options">Diesel</option>
    <option value="Electric" className="options">Electric</option>
    <option value="Hybrid" className="options">Hybrid</option>
    <option  value="CNG" className="options">CNG</option>
 
   </select> 

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-label">Transmission</label>
<select id="" className="form-control" name="transmission" value={input.transmission} onChange={inputHandler}>
    <option  value="Manual" className="options">Manual</option>
    <option value="Automatic" className="options">Automatic</option>

    </select>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Seating Capacity</label>
<input type="text" className="form-control" name="seating_capacity" value={input.seating_capacity} onChange={inputHandler}/>


        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Rent per day</label>
<input type="text" className="form-control" name="rent_per_day" value={input.rent_per_day} onChange={inputHandler}/>


        </div>


        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-label">City</label>
<input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler}/>


        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Availability Status</label>
<select id="" className="form-control" name="availability_status" value={input.availability_status} onChange={inputHandler}>
    <option value ="Available" className="options">Available</option>
    <option value ="Booked" className="options">Booked</option>
    <option value ="Maintenance" className="options">Maintenance</option>

</select>

        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">




        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">


<button className="btn btn-outline-dark" onClick={readValue}>SUBMIT</button>

        </div>
    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddCar