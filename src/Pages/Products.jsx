import {Link, json} from "react-router-dom";
import {useEffect, useState} from "react";
import Swal from 'sweetalert2'
export const Products = (props) => {
        const [products , setProducts] = useState([]);
    const apiUrl = "http://localhost:9000/products";
    useEffect(() => {
        getAllProducts()
    },[]);

    const getAllProducts =()=>{
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=>setProducts(data)
    )
    }

    const deleteProduct =(product)=>{
        Swal.fire({
            title:`Are You Sure to Delete :${product.title} ?`,
            showCancelButton:true
        }).then((data)=>{
            if(data.isConfirmed){
                fetch(`http://localhost:9000/products/${product.id}`,{
                    method: "DELETE"
                }).then((res)=>res.json())
                    .then((deletedData)=>{
                        console.log(deletedData);
                        getAllProducts()
                    })
            }
        })
    }
    return (
        <>
            <div>
                <h1>Products Page</h1>
                <Link className='btn btn-success mt-2' to='/products/add'>Add New Product</Link>
                <table className="table table-hover mt-3">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}$</td>
                            <td>{product.description.slice(0, 40)}..etc </td>
                            <td>
                                <button className='btn btn-outline-danger ms-1' onClick={()=>{deleteProduct(product)}}>Delete</button>
                                <Link className='btn btn-outline-dark ms-2' to={`/products/${product.id}`}>View</Link>
                                <button className='btn btn-outline-success ms-2'>Edit</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}
