// Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detailed from "./pages/Detailed";

function Main() {
  // for checking redirect to "login" or "home"
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={user.active ? <Home /> : <Login />} />
          <Route
            path="/detailed/:id"
            element={user.active ? <Detailed /> : <Login />}
          />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>404 Not Found!!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
