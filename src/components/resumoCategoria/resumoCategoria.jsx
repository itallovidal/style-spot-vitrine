import './resumoCategoria.css'
import CardProduto from "../cardProduto/cardProduto.jsx";
import {Link} from "react-router-dom";
import getItems from "../../utilities/getItems.jsx";
import React from "react";
import Loading from "../loading/loading.jsx";
import categoriasInfo from "../../utilities/categoria.config.jsx";

const query = {
    'Relógios': 'mens-watches',
    'Joias':'womens-jewellery',
    'Roupas': 'womens-dresses',
    'Tênis':'mens-shoes'
}

function ResumoCategoria({categoriasInfo}) {
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{
        getItems(query[categoriasInfo.categoria])
            .then((resposta) => {
                setProdutos(resposta)
        })
    }, [])

    return produtos !== null ? (
        <article className={'container_resumoCategoria'}>
            <div className={'container_titulo'}>
                <h1>{categoriasInfo.categoria}</h1>
            </div>
            <section>
                {produtos.map((produto)=>{
                    return <CardProduto key={produto.id} dados={produto}/>
                })}
            </section>

            <Link className={'btn verMais_categoria'} to={`${categoriasInfo.caminho}`}>Ver Mais</Link>
        </article>
    ) : <Loading/>
}
export default ResumoCategoria;