import React from 'react';
import {Link, useParams} from "react-router-dom";
import getItems from "../../utilities/getItems.jsx";
import './listagemProdutos.css'
import CardProduto from "../../components/cardProduto/cardProduto.jsx";
function ListagemProdutos() {
    const url = useParams()
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{
        getItems(url.categoria, 5)
            .then((resposta) => {
                // console.log(resposta)
                setProdutos(resposta)
            })
    }, [])



    return produtos !== null ? (
        <main id={'container_listagemProdutos'}>
            <header id={'header_listagem'}>
                <picture>
                    <img src="/images/placeholder.png" alt=""/>
                </picture>
                <section id={'container_filtro'}>
                    <Link to={'/'}>Filtro 01</Link>
                    <Link to={'/'}>Filtro 01</Link>
                    <Link to={'/'}>Filtro 01</Link>
                    <Link to={'/'}>Filtro 01</Link>
                </section>
            </header>

            <article id={'listagem'}>
                {produtos.map((produto)=>{
                    return <CardProduto key={produto.id} dados={produto}/>
                })}
            </article>
        </main>
    ) : 'loading'
}

export default ListagemProdutos;