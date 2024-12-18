import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import './styles/App.css';
import RegistrationPage from "./components/pages/registration/RegistrationPage";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/about/About";
import routes from "./route-paths/routes";
import MainLayout from "./components/layouts/MainLayout";
import MinimalLayout from "./components/layouts/MinimalLayout";
import AlumniDirectory from "./components/pages/alumni-directory/AlumniDirectory";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path={routes.home} element={<Homepage/>}/>
                        <Route path={routes.about} element={<About/>}/>
                        <Route path={routes.alumniDirectory} element={<AlumniDirectory/>}/>
                        <Route path={routes.contact} element={<Contact/>}/>
                    </Route>
                    <Route element={<MinimalLayout/>}>
                        <Route path={routes.registration} element={<RegistrationPage/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
