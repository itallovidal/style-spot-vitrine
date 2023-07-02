import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import './produto.css'
import ResumoCategoria from "../../components/resumoCategoria/resumoCategoria.jsx";
import getProduct from "../../utilities/getProduct.jsx";
import Loading from "../../components/loading/loading.jsx";
import categoriasInfo from "../../utilities/categoria.config.jsx";



const query = {
    'mens-watches': categoriasInfo[0],
    'womens-watches': categoriasInfo[0],

    'womens-jewellery':categoriasInfo[1],
    'sunglasses': categoriasInfo[1],

    'tops': categoriasInfo[2],
    'womens-dresses':categoriasInfo[2],
    'mens-shirts': categoriasInfo[2],

    'mens-shoes':categoriasInfo[3],
    'womens-shoes': categoriasInfo[3],






}

function Produto() {
    const [produto, setProdutos] = React.useState(null)
    const categoriaAtual = useParams().categoria
    console.log(categoriaAtual)
    const URLInfo = useLocation()
    const search = new URLSearchParams(URLInfo.search) // transforma em um objeto manipulável

    React.useEffect(()=>{
        setProdutos(null)
        getProduct(search, categoriaAtual)
            .then((resposta) => {
                setProdutos(resposta)
            })
    }, [URLInfo])

    return produto !== null ? (
        <main id={'container_produto'}>
            <article id={'produto'}>
                <picture>
                    <img src={produto.images[0]} alt=""/>
                </picture>

                <section id={'produto_infos'}>
                    <h1 id={'produto_nome'}>{produto.title} </h1>
                    <p id={'produto_desc'}>{produto.description}</p>

                    <div id={'produto_espec'}>
                        <Link className={'item'} to={'/'}>{produto.brand}</Link>
                        <Link className={'item'} to={`${query[categoriaAtual].caminho}`}>{query[categoriaAtual].categoria}</Link>
                        <span className={'item'} id={'preco'}>${produto.price}</span>
                    </div>

                    <Link id={'btn_comprar'} className={'btn'} to={'/'}> Comprar </Link>
                </section>
            </article>

            <article id={'container_sugestao'}>
                <ResumoCategoria categoriasInfo={query[categoriaAtual]}/>
            </article>
        </main>
    ) : <Loading pageLoading={true}/>

}

export default Produto;