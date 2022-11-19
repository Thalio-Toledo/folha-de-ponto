import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';


import Card from '../components/template/Card';
import Footer from '../components/template/Footer';
import React from "react";

import BaterPontos from '../components/pontos/BaterPontos';
import FolhaDePontos from '../components/pontos/FolhaDePontos';

export default props => 

<BrowserRouter >
    <div className="app">
        <Card name="Thalio" />
         <Routes />        
          {/* <BaterPonto className="lado"/>   */}
          {/* <Teste/> */}
         {/* <BaterPontos/>   */}
{/*           
          <FolhaDePontos/> */}
          <Footer/>
         
    </div>

</BrowserRouter>

