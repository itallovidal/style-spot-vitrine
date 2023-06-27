import React from "react";
import './navbar.css'
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <header id={'container_navbar'}>
            <div>
                <p>Style  Spot</p>
            </div>

            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/produtos/womens-dresses'}>Roupas</Link>
                <Link to={'/produtos/womens-jewellery'}>Joias</Link>
                <Link to={'/produtos/mens-shoes'}>Tênis</Link>
                <Link to={'/produtos/mens-watches'}>Relógios</Link>
            </nav>

            <div id='container_search'>
                <input type="search" placeholder={'Pesquise um produto..'}/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </header>

    )
}

export default Navbar