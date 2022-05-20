import { useEffect, useState } from "react";
import React from "react";
import Example from "./Loading/example";


const Product = () =>{

const [data, setData] = useState([]);
const [filter, setFilter] = useState(data);
const [loading, setLoading] = useState(false);
let componentMounted = true;

useEffect(() =>{
const getProducts = async () => {
setLoading(true);
const response = await fetch("https://fakestoreapi.com/products");

if(componentMounted){
setData(await response.clone().json());
setFilter(await response.json());
setLoading(false);
console.log(filter)
}

return () =>{
componentMounted = false;
}
}

getProducts();
},[] )

const Loading = () =>{
return(
<>
    {/* Loading... */}
    <Example />
</>
)
}

const ShowProducts = () =>{

return(
<>
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2">All</button>
        <button className="btn btn-outline-dark me-2">Men's Clothing</button>
        <button className="btn btn-outline-dark me-2">Women's Clothing</button>
        <button className="btn btn-outline-dark me-2">Jewelery</button>
        <button className="btn btn-outline-dark me-2">Electronic </button>
    </div>

    {filter.map((product) => {
    return(
    <>
        <div className="list col-md-3 mb-4">
            <div className="card h-100 text-center p-4" key={product.id} >
                <img src={product.image} className="list-img card-img-top" alt={product.title} height="220px" />
                <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                    <p className="card-text fw-bold lead">${product.price}</p>
                    <a href="#" className="btn btn-outline-success">Buy Now</a>
                </div>
            </div>
        </div>
    </>
    )
    })}
</>
)
}

return(
<div>
    <div className="container my-5 py-5">
        <div className="row">
            <div className="col-12 mb-5">
                <h1 className="list-text display-6 fw-bolder text-center">Lates Products</h1>
                <hr />
            </div>
        </div>
        <div className="row justify-content-center">
            {loading ?
            <Loading /> :
            <ShowProducts /> }
        </div>
    </div>
</div>
);
}

export default Product