import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/navbar/Navbar';
import Homepage from "./components/homepage/Homepage";

import './App.css';
import Footer from "./components/footer/Footer";

function App() {
  return (
      <Router>
          <div className="app-container">
              <NavigationBar />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Homepage />} />
                      {/*<Route path="/about" element={<About />} />*/}
                      {/*<Route path="/admin" element={<AdminDashboard />} />*/}
                  </Routes>
              </div>
              <Footer/>
          </div>

      </Router>
  );
}

export default App;
