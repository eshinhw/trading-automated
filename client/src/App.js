import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="event" element={<Event />}>
          <Route path="one" element={<div>First order free shipping!</div>}/>
          <Route path="two" element={<div>Second order $100 coupon!</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <>
      <p>This is Event Page.</p>
      <Outlet></Outlet>
    </>
  );
}

export default App;
