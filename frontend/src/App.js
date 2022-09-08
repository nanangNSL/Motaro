import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Style.css";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import AddRecipe from "../src/Pages/Addrecipe";
// font
import "./style/fonts/AirbnbCereal_W_Bd.otf";
import "./style/fonts/AirbnbCereal_W_Bk.otf";
import "./style/fonts/AirbnbCereal_W_Blk.otf";
import "./style/fonts/AirbnbCereal_W_Lt.otf";
import "./style/fonts/AirbnbCereal_W_Md.otf";
import "./style/fonts/AirbnbCereal_W_XBd.otf";
import Recipe from "./Pages/Detail/Recipe";
import Profile from "./Pages/Detail/Profile";



function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="dashboard/profile" element={<Profile/>}/>
         <Route path="profile" element={<Profile/>}/>
         <Route path="detail/:id" element={<Recipe />}/>
         <Route path="dashboard/add" element={<AddRecipe/>}/>
         <Route path="add" element={<AddRecipe/>}/>
         <Route path="/" element={<Home />}/>
        <Route path={process.env.REACT_APP_PATH_LOGIN} element={<Login />} />
        <Route path={process.env.REACT_APP_PATH_REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
