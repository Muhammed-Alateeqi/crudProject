
import './App.css';
import Navbar from "./Componeents/Navbar";
import {Sidebar} from "./Componeents/Sidebar";
import {Routes ,Route} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Products} from "./Pages/Products";
import {AddNewProduct} from "./Pages/AddNewProduct";
import View from './Pages/View';


function App() {
  return (
    <div className="App">
    <Navbar />
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 bg-body-tertiary side-bar'>
          <Sidebar/>
        </div>
        <div  className='col-10'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='products/add' element={<AddNewProduct />}/>
              <Route path='products/:productID' element={<View />}/>
            </Routes>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
