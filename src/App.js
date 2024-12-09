import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from './components/navbar/Navbar';
import Homepage from "./components/homepage/Homepage";

import './App.css';
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import RegistrationForm from "./components/forms/RegistrationForm";
import AlumniDirectory from "./components/alumni-directory/AlumniDirectory";
import Contact from "./components/forms/Contact";
import AdminDashboard from "./components/admin-dashboard/AdminDashboard";
import {DirectoryProvider} from "./components/alumni-directory/DirectoryContext";
import DirectoryRoute from "./components/alumni-directory/DirectoryRoute";

function App() {

    return (
      <Router >
          <div className="app-container">
              <NavigationBar />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/registration" element={<RegistrationForm />} />
                      <Route path="/alumni-directory" element={<DirectoryRoute />} />
                      <Route path="/contact" element={<Contact/>}/>
                  </Routes>
              </div>
              <Footer/>
          </div>

      </Router>
  );
}

export default App;
