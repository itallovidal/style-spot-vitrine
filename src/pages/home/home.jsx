import React from 'react';
import './home.css'
import CategoriaItem from "./categoriaItem.jsx";

const categorias = [
    {categoria: 'relogios' ,srcImg: '/images/relogios.jpg', caminho: '/produtos/relogios' },
    {categoria: 'joias' ,srcImg: '/images/joias.jpg', caminho: '/produtos/joias' },
    {categoria: 'roupas' ,srcImg: '/images/roupas.jpg', caminho: '/produtos/roupas' },
    {categoria: 'tenis' ,srcImg: '/images/tenis.jpg', caminho: '/produtos/tenis' }
]

console.log(categorias[0])
console.log(categorias[2])


function Home(props) {
    return (
        <main id='container_home'>
            <article id='container_categoria'>
                { categorias.map((categoria, i)=>{
                    return <CategoriaItem key={i} valores={categoria}/>
                })}
            </article>
        </main>
    );
}

export default Home;