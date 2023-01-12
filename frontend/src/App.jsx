import Home from "./pages/Home";
import {Route,Routes,Navigate} from 'react-router-dom'
import Announcement from "./components/Announcement/Announcement";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import SingleProduct from "./pages/SingleProduct";
import Newsletter from "./components/NewsLetter/Newsletter";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar/NavBar";
import CartSuccess from "./pages/CartSuccess";
import CartFailer from "./pages/CartFailer";

function App() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to='/Home' replace='true' />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products/:categories" element={<Categories />} />
        <Route path="Product/:id" element={<SingleProduct />}/>
        <Route path="/Auth" element={<Auth />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/Cart/success" element={<CartSuccess />}/>
        <Route path="/Cart/failer" element={<CartFailer />}/>
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
