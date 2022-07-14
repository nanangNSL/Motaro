import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./style/Style.css";


import ShowProduct from "./components/ShowProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import AddRecipe from "./components/Addrecipe";
// font
import "./style/fonts/AirbnbCereal_W_Bd.otf";
import "./style/fonts/AirbnbCereal_W_Bk.otf";
import "./style/fonts/AirbnbCereal_W_Blk.otf";
import "./style/fonts/AirbnbCereal_W_Lt.otf";
import "./style/fonts/AirbnbCereal_W_Md.otf";
import "./style/fonts/AirbnbCereal_W_XBd.otf";
import Recipe from "./Pages/Detail/Recipe";
import Profile from "./Pages/Detail/Profile";


axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="recipe" element={<ShowProduct />}/>
         <Route path="profile" element={<Profile/>}/>
         <Route path="detail" element={<Recipe />}/>
         <Route path="edit/:id" element={<AddRecipe/>}/>
         <Route path="/" element={<Home />}/>
        <Route path={process.env.REACT_APP_PATH_LOGIN} element={<Login />} />
        <Route path={process.env.REACT_APP_PATH_REGISTER} element={<Register />} />
        <Route path={process.env.REACT_APP_PATH_DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
