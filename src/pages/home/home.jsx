import React from 'react';
import './home.css'
import CategoriaItem from "./categoriaItem.jsx";
import ResumoCategoria from "../../components/resumoCategoria/resumoCategoria.jsx";

const categorias = [
    {categoria: 'relogios' ,srcImg: '/images/relogios.jpg', caminho: '/produtos/mens-watches' },
    {categoria: 'joias' ,srcImg: '/images/joias.jpg', caminho: '/produtos/womens-jewellery' },
    {categoria: 'roupas' ,srcImg: '/images/roupas.jpg', caminho: '/produtos/womens-dresses' },
    {categoria: 'tenis' ,srcImg: '/images/tenis.jpg', caminho: '/produtos/mens-shoes' }
]

function Home() {
    return (
        <main id='container_home'>
            <article id='container_categoria'>
                { categorias.map((categoria, i)=>{
                    return <CategoriaItem key={i} valores={categoria}/>
                })}
            </article>

            <article>
                <ResumoCategoria categoria={'womens-dresses'}/>
                <ResumoCategoria categoria={'womens-jewellery'}/>
                <ResumoCategoria categoria={'mens-watches'}/>
                <ResumoCategoria categoria={'mens-shoes'}/>
            </article>
        </main>
    );
}

export default Home;