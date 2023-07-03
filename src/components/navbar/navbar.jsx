import React from "react";
import './navbar.css'
import {Link} from "react-router-dom";
import categoriasInfo from "../../utilities/categoria.config.jsx";







function Navbar(){
    const nav = React.useRef()

    function changeNav(){
        nav.current.classList.toggle('changeNav')
    }

    return (
        <header id={'container_navbar'}>
            <div id={'logo_container'}>
                <p>Style <br/> &nbsp; Spot</p>
            </div>

            <i onClick={()=>{changeNav()}} id={'btn_menuOpen'} className="fa-solid fa-bars"></i>
            <nav ref={nav}>
                <i onClick={()=>{changeNav()}} id={'btn_menuClose'} className="fa-solid fa-xmark"></i>
                <Link to={'/'}>Home</Link>
                {categoriasInfo.map((info, i)=>{
                        return <Link key={i} to={info.caminho}>{info.categoria}</Link>
                    })}
            </nav>


        </header>

    )
}

export default Navbar