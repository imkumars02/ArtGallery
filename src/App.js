import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; // Make sure your CSS file is correctly imported
import Contact from "./Contact";
import About from "./About";
import UserDashboard from "./Dashboard/UserDashboard";
import Buy from "./UserComponent/Buy";
import Cart from "./UserComponent/Cart";
import Login from "./Login";
import PrivacyPolicy from "./PrivacyPolicy";
import TermCondition from "./TermCondition";
import Orders from "./UserComponent/Orders";
import ArtistsDashboard from "./Dashboard/ArtistsDashboard";
import Content from "./ArtistComponent/Content";
import Participate from "./ArtistComponent/Participate";
import AdminDashboard from "./Dashboard/AdminDashboard";
import ArtistInformation from "./AdminComponent/ArtistInformation";
// import Footer from "./Footer"; // Uncomment if needed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />

        {/* User Routes */}
        <Route path="/Buy" element={<Buy />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />

        {/* General Routes */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermCondition" element={<TermCondition />} />


        {/* Artists Routes */}
        <Route path="/ArtistsDashboard" Component={ArtistsDashboard}></Route>
        <Route path="/Content" Component={Content}></Route>
        <Route path="/Participate" Component={Participate}></Route>

        {/* Admin Routes */}
        <Route path="/AdminDashboard" Component={AdminDashboard} />
        <Route path="/ArtistInformation" Component={ArtistInformation} />
      </Routes>
      {/* Footer can be included if needed */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
