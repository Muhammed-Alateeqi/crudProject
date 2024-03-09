import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const Products = (props) => {
        const [products , setProducts] = useState([]);
    const apiUrl = "http://localhost:9000/products";
    useEffect(() => {
    fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=>setProducts(data)
    )
    },[]);
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
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}$</td>
                                {/*operations */}
                                <td>
                                    <button className='btn btn-outline-danger ms-1'>Delete</button>
                                    <button className='btn btn-outline-success ms-2'>View</button>
                                    <button className='btn btn-outline-dark ms-2'>Edit</button>
                                </td>
                            </tr>

                    ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}
