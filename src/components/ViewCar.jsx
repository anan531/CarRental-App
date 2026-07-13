import { useEffect, useState } from "react"
import Navigation from "./Navigation"
import axios from "axios"

const ViewCar = () => {


const[data,changeData] = useState([])

        const fetchData = () => {

            axios.get("https://host-demo-app.onrender.com/api/cars").then(

                (response) => {

                    changeData(response.data)


                }

            ).catch()

        }

        useEffect(


            () => {


                fetchData()

            }, []

        )



  return (
    <div>
<Navigation/>
<h1 align= "center">View Cars</h1>    


<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">


    {data.map(

        (value,index) => {

                return(

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<div class="card" >
  <div class="card-body">
    <h5 class="card-title">{value.registration_number}</h5>
    <p class="card-text">{value.brand}</p>
    <p class="card-text">{value.model}</p>
    <p class="card-text">{value.vehicle_type}</p>
    <p class="card-text">{value.fuel_type}</p>
    <p class="card-text">{value.transmission}</p>
    <p class="card-text">{value.seating_capacity}</p>
    <p class="card-text">{value.rent_per_day}</p>
    <p class="card-text">{value.city}</p>
    <p class="card-text">{value.availability_status}</p>
  </div>
</div>


        </div>



                )

        }


    )}


    </div>
</div>


        </div>
    </div>
</div>



    </div>
  )
}


export default ViewCar