import React from "react";
import './navbar.css'
import {Link} from "react-router-dom";
import categoriasInfo from "../../utilities/categoria.config.jsx";

function Navbar(){
    return (
        <header id={'container_navbar'}>
            <div>
                <p>Style  Spot</p>
            </div>

            <nav>
                <Link to={'/'}>Home</Link>
                {
                    categoriasInfo.map((info, i)=>{
                        return <Link key={i} to={info.caminho}>{info.categoria}</Link>
                    })
                }
            </nav>


        </header>

    )
}

export default Navbar