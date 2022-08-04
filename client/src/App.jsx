import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Outfit from "./pages/Outfit";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList/>} />
      </Routes>
      <Routes>
        <Route path="/outfit/:id" element={<Outfit/>} />
      </Routes>
      <Routes>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>} />
      </Routes>
    </Router>
  )
};

export default App;