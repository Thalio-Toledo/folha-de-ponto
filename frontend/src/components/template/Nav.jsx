import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
         
           
            <Link to="/BaterPontos">
                <i className="fa fa-users"></i> Bater Pontos
            </Link>

            <Link to="/FolhaDePontos">
                <i className="fa fa-users"></i> Folha de pontos
            </Link>
        </nav>
    </aside>