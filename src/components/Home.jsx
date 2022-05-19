import React from "react";

import bg from '../assets/img/bg.jfif'
import Product from "./Product";

const Home = () =>{
return(
    <div className="hero">
        <div class="card bg-dark text-white border-0">
            <img src={bg} class="card-img" alt="..." height="550px" />
            <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIWALS</h5>
                    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
        </div>
        <Product />
    </div>
)
}
export default Home