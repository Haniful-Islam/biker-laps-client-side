
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBike from './Pages/AddBike/AddBike';
import AllItem from './Pages/AllItems/AllItem';
// import AllItem from './Pages/AllItems/AllItem';
import BikeInventory from './Pages/BikeInventory/BikeInventory';
import Blogs from './Pages/Blogs/Blogs';
import BikeServicing from './Pages/Home/BikeServicing/BikeServicing';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageBikes from './Pages/ManageBikes/ManageBikes';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/bike/:bikeId" element={
          <PrivateRoute>
            <BikeInventory></BikeInventory>
          </PrivateRoute>}>
        </Route>
        <Route path='/addbike' element={<PrivateRoute>
          <AddBike></AddBike>
        </PrivateRoute>}>
        </Route>
        <Route path='/manage' element={<PrivateRoute>
          <ManageBikes></ManageBikes>
        </PrivateRoute>}>
        </Route>
        <Route path="/bikeservicing" element = {<BikeServicing></BikeServicing>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/all-items" element={<AllItem></AllItem>}></Route>
        <Route path="/myitems" element ={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
