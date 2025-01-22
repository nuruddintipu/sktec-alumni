import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <Router>
            <div className="app-container">
                <AppRoutes/>
            </div>
        </Router>
    );
}

export default App;
