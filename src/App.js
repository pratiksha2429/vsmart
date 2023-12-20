import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Website/Maincomponent/Index';
import Master from './Website/Master';
import Shop from './Website/Pages/Shop';
import About from './Website/Pages/About';
import BankingDetails from './Website/Pages/BankingDetails';
import Downloadpage from './Website/Pages/Downloadpage';
import Blog from './Website/Pages/Blog';
import Wallet from './Website/Pages/Wallet';
import Subcategory from './Website/Pages/Subcategory';
import Login from './Website/Authentication/Login';
import Register from './Website/Authentication/Register';
import SubBrand from './Website/Pages/SubBrand';
import Wishlist from './Website/Pages/Wishlist';
import CompaireList from './Website/Pages/CompaireList';
import Cart from './Website/Pages/Cart';
import Search from './Website/Pages/Search/Search';
import Checkout from './Website/Pages/Checkout';
import Orderlist from './Website/Pages/Orderlist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master Comp={Index}></Master>}>   </Route>
          <Route path='/shop' element={<Master Comp={Shop}></Master>}>   </Route>
          <Route path='/about' element={<Master Comp={About}></Master>}>   </Route>
          <Route path='/Download' element={<Master Comp={Downloadpage}></Master>}>   </Route>
          <Route path='/bankDetail' element={<Master Comp={BankingDetails}></Master>}>   </Route>
          <Route path='/blog' element={<Master Comp={Blog}></Master>}>   </Route>
          <Route path='/wallet' element={<Master Comp={Wallet}></Master>}>   </Route>
          <Route path='/login' element={<Master Comp={Login}></Master>}>   </Route>
          <Route path='/register' element={<Master Comp={Register}></Master>}>   </Route>
          <Route path='/product-shop/:brand_id' element={<Master Comp={SubBrand}></Master>}>   </Route>
          <Route path='/wishlist' element={<Master Comp={Wishlist}></Master>}>   </Route>
          <Route path='/cart' element={<Master Comp={Cart}></Master>}>   </Route>
          <Route path='/compaire' element={<Master Comp={CompaireList}></Master>}>   </Route>
          <Route path='/search' element={<Master Comp={Search}></Master>}>   </Route>
          <Route path='/checkout' element={<Master Comp={Checkout}></Master>}>   </Route>
          <Route path='/orderlist' element={<Master Comp={Orderlist}></Master>}>   </Route>
          <Route path='/product-shop/:cat_id/:sub_id' element={<Master Comp={Subcategory}></Master>}>   </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
