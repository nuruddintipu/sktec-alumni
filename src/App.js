import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from './components/layouts/navbar/Navbar';
import Homepage from "./components/pages/homepage/Homepage";
import './styles/App.css';
import Footer from "./components/layouts/footer/Footer";
import RegistrationForm from "./components/pages/registration/RegistrationForm";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/about/About";
import DirectoryRoute from "./components/pages/alumni-directory/DirectoryRoute";
import routes from "./route-paths/routes";

function App() {

    return (
      <Router >
          <div className="app-container">
              <NavigationBar />
              <div className="content">
                  <Routes>
                      <Route path={routes.home} element={<Homepage />} />
                      <Route path={routes.about} element={<About />} />
                      <Route path={routes.registration} element={<RegistrationForm />} />
                      <Route path={routes.alumniDirectory} element={<DirectoryRoute />} />
                      <Route path={routes.contact} element={<Contact/>}/>
                  </Routes>
              </div>
              <Footer/>
          </div>

      </Router>
  );
}

export default App;
