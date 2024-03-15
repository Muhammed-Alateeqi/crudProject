import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function View() {

    let {productID} = useParams();
    const [viewProduct,setViewProduct] = useState();
    const apiUrl = "http://localhost:9000/products/";
    useEffect(()=>{
        fetch(`${apiUrl}${productID}`)
        .then((response)=>response.json())
        .then((data)=>{
        setViewProduct(data)
        console.log(data);
    }    
        
    )},[])
  return (
    <div>
    {
        viewProduct&& <div className='product-details'>
        <h1>
        {viewProduct.title}
        </h1>
        <h5>{viewProduct.category}</h5>
        <img width='200px' src={viewProduct.image} alt="productImage"/>
        <p>{viewProduct.description}</p>
        <p>{viewProduct.price}$</p>
        </div>
 
        
    }
    </div>
  )
}

export default View