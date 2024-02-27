import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";

import LandingPage from "./components/ LandingPage";
import ShowWardrobe from "./components/ShowWardrobe";
import AddWardrobe from "./components/AddWardrobe";
import SelectItems from "./components/SelectItems";
import Combinations from "./components/Combinations";

const user =localStorage.getItem("user");
const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/showwardrobe" element={<ShowWardrobe />} />
        <Route path="/selectItems" element={<SelectItems />} />
        <Route path="/addwardrobe" element={<AddWardrobe />} />
        <Route path="/combinations" element={<Combinations />} />

        {/* 
       
        <Route path="/auth" element={<Auth />} />
        
        */}
      </Routes>
    </div>
  </Router>
);

export default App;
