import React from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import getItems from "../../utilities/getItems.jsx";
import './listagemProdutos.css'
import CardProduto from "../../components/cardProduto/cardProduto.jsx";
import Loading from "../../components/loading/loading.jsx";

const categoriaImagens = {
    'mens-watches': '/images/list/capa/capaWatch.jpg',
    'womens-jewellery': '/images/list/capa/capaEarring.jpg',
    'womens-dresses': '/images/list/capa/capaClothing.jpg',
    'mens-shoes': '/images/list/capa/capaShoes.jpg'
}

const teste = 'oi'
function ListagemProdutos() {
    const url = useParams()
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{
        setProdutos(null)
        getItems(url.categoria, 5)
            .then((resposta) => {
                setProdutos(resposta)
            })
    }, [url])



    return produtos !== null ? (
        <main key={produtos[0].category} id={'container_listagemProdutos'}>
            <header id={'header_listagem'}>
                <picture>
                    <img className={produtos[0].category} src={categoriaImagens[produtos[0].category]} alt=""/>
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
            <Outlet context={teste}/>
        </main>
    ) : <Loading/>
}

export default ListagemProdutos;