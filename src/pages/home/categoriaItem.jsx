import React from 'react';

import {Link} from "react-router-dom";

function CategoriaItem({valores}){
    return (
        <div className='container_categoriaItem'>
            <img src={valores.srcImg} alt=""/>

            <div className='categoria_info'>
                <span>{valores.categoria}</span>
                <Link to={valores.caminho} className='btn_verMais'> Ver mais ! </Link>
            </div>
        </div>
    );
}

export default CategoriaItem;