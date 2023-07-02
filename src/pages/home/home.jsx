import React from 'react';
import './home.css'
import CategoriaItem from "./categoriaItem.jsx";
import ResumoCategoria from "../../components/resumoCategoria/resumoCategoria.jsx";
import categoriasInfo from "../../utilities/categoria.config.jsx";


function Home() {
    return (
        <main id='container_home'>
            <article id='container_categoria'>
                { categoriasInfo.map((categoria, i)=>{
                    return <CategoriaItem key={i} valores={categoria}/>
                })}
            </article>

            <article>
                {categoriasInfo.map((categoria, i)=>{
                        return <ResumoCategoria key={i} categoriasInfo={categoria}/>
                })}
            </article>
        </main>
    );
}

export default Home;