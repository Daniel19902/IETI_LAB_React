
import './App.css';
import Longin from './components/Login';
import Connect from "./components/Connect";
import Loby from "./components/Loby"
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/Login" element={<Longin></Longin>} />
            </Routes>
            <Routes>
                <Route path="/Conectar/:email/:password" element={<Connect></Connect>}> hola </Route>
            </Routes>
            <Routes>
                <Route path="/Loby" element={<Loby></Loby>}> hola </Route>
            </Routes>

        </div>
      </Router>
  );
}

export default App;
