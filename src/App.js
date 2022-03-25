
import './App.css';
import Longin from './components/Login';
import Connect from "./components/Connect";
import Loby from "./components/Loby"
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useReducer } from "react"
import { themeReducer } from './utils';
import { initialState } from './utils';
import { ThemeContext } from './ThemeContext'
import Button from '@mui/material/Button';
import { useContext } from "react";

function App() {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider  value={{ state, dispatch }}>
            <Router>
                <div className="App">
                    <Button onClick={() => {
                        if (state.isDarkMode) {
                            dispatch("SET_LIGHT_MODE");
                        } else {
                            dispatch("SET_DARK_MODE");
                        }
                    }}>Change Theme </Button>
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
        </ThemeContext.Provider>
    );
}

export default App;
