import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"


import Home from './Pages/Home'
import Config from './Pages/Config'
import Sair from './Pages/Logout'
import Login from './Pages/Login'

function App() {

    const [user, setUser] = useState(null);
    if (user === null) {
        return (
            <Login />
        );
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Config" element={<Config />} />
                <Route path="/Logout" element={<Sair />} />
            </Routes>
        </Router>
    );
}

export default App;