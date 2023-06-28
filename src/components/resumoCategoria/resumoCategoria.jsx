import './resumoCategoria.css'
import CardProduto from "../cardProduto/cardProduto.jsx";
import {Link} from "react-router-dom";
import getItems from "../../utilities/getItems.jsx";
import React from "react";
import Loading from "../loading/loading.jsx";

const categorias = {
    'womens-dresses': 'Roupas',
    'womens-jewellery': 'Jóias',
    'mens-watches': 'Relógios',
    'mens-shoes': 'Tênis'
}

function ResumoCategoria({categoria}) {
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{
        getItems(categoria)
            .then((resposta) => {
                setProdutos(resposta)
        })
    }, [])

    return produtos !== null ? (
        <article className={'container_resumoCategoria'}>
            <div className={'container_titulo'}>
                <h1>{categorias[categoria]}</h1>
            </div>
            <section>
                {produtos.map((produto)=>{
                    return <CardProduto key={produto.id} dados={produto}/>
                })}
            </section>

            <Link className={'btn verMais_categoria'} to={`/produtos/${categoria}`}>Ver Mais</Link>
        </article>
    ) : <Loading/>
}
export default ResumoCategoria;