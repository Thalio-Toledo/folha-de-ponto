import React from "react";
import { Routes, Route } from "react-router-dom";

import BaterPontos from "../components/pontos/BaterPontos";
import FolhaDePontos from "../components/pontos/FolhaDePontos";





export default props=> (
    <Routes>
        <Route exact path="/" element={<BaterPontos/>}/>
        <Route path="/BaterPontos"  element={<BaterPontos/>}/>
        <Route path="/FolhaDePontos"  element={<FolhaDePontos/>}/> 
        
    </Routes>
)
