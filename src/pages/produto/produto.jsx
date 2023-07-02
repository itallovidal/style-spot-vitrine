import React from 'react';
import {Link, useLocation, useOutletContext, useParams} from "react-router-dom";
import './produto.css'
import ResumoCategoria from "../../components/resumoCategoria/resumoCategoria.jsx";
import getItems from "../../utilities/getItems.jsx";
import getProduct from "../../utilities/getProduct.jsx";
import Loading from "../../components/loading/loading.jsx";

function Produto() {
    const [produto, setProdutos] = React.useState(null)
    const categoriaAtual = useParams().categoria
    const URLInfo = useLocation()
    const search = new URLSearchParams(URLInfo.search) // transforma em um objeto manipulável

    React.useEffect(()=>{
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
                        <Link className={'item'} to={`/produtos/${categoriaAtual}`}>{produto.category}</Link>
                        <span className={'item'} id={'preco'}>${produto.price}</span>
                    </div>

                    <Link id={'btn_comprar'} className={'btn'} to={'/'}> Comprar </Link>
                </section>
            </article>

            <article id={'container_sugestao'}>
                <ResumoCategoria categoria={categoriaAtual}/>
            </article>
        </main>
    ) : <Loading/>

}

export default Produto;