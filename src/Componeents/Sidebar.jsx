import {Link} from "react-router-dom";


export const Sidebar = () => {
    return (
        <>
        <ul className='list-unstyled'>
            <li>
                <Link to='/products'>Get All Products</Link>
            </li>
            <li>
                 <Link to='#'>Get All Categories</Link>
            </li>
        </ul>
        </>
    )
}
