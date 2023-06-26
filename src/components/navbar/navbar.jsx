import React from "react";
import './navbar.css'
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <header>
            <div>
                <p>Style  Spot</p>
            </div>

            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/produtos/roupas'}>Roupas</Link>
                <Link to={'/produtos/joias'}>Joias</Link>
                <Link to={'/produtos/tenis'}>Tênis</Link>
                <Link to={'/produtos/relogios'}>Relógios</Link>
            </nav>

            <div id='container_search'>
                <input type="search" placeholder={'Pesquise um produto..'}/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </header>

    )
}

export default Navbar