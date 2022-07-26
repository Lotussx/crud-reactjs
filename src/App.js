import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"

import Home from "./Pages/Home/index"
import NovoProjeto from "./Pages/NewProjects"
import Empresa from "./Pages/Empresa/index"
import Contato from "./Pages/Contato/index"

import Header from "./Components/Header";
import Footer from "./Components/Footer";



function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/NovoProjeto" element={<NovoProjeto />} />
                <Route path="/Empresa" element={<Empresa />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;