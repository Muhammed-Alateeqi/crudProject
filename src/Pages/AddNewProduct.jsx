import {useState} from "react";

export const AddNewProduct = () => {
    const formSubmit =(e)=>{
    e.preventDefault()
 fetch("http://localhost:9000/products",{
        method:"POST",
     body: JSON.stringify({
         title:title,
         price:price,
          description :desc
     })
 })
     .then((res)=> res.json())
     .then((data)=>{console.log(data)})
    }
    const [title , setTitle] = useState('');
    const [price , setPrice] = useState(0);
    const [desc , setDesc] = useState('');



    return (
        <>
            <h1 className='mt-3'>Add New Product</h1>
            <form className='productForm mt-3' onSubmit={formSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title"
                           placeholder="Product Title"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="Product Title"
                           placeholder="Price"
                           onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="Product Title"
                           placeholder="Product Description"
                           onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <select className="form-select mt-3" aria-label="Default select example">
                        <option selected>Product Category</option>
                        <option value="1">electronics</option>
                        <option value="2">jewelery</option>
                        <option value="3">men's clothing</option>
                        <option value="4">women's clothing</option>
                    </select>
                    {/*Chose File*/}
                    <div className="mb-3">
                        <input className="form-control mt-3" type="file" id="formFileDisabled" disabled/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Add Product
                </button>
            </form>
        </>
    )
}
