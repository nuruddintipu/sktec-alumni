import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from './components/layouts/navbar/Navbar';
import Homepage from "./components/pages/homepage/Homepage";
import './styles/App.css';
import Footer from "./components/layouts/footer/Footer";
import RegistrationForm from "./components/pages/forms/RegistrationForm";
import Contact from "./components/pages/forms/Contact";
import About from "./components/pages/about/About";
import DirectoryRoute from "./components/pages/alumni-directory/DirectoryRoute";

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
