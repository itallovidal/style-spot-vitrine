import React, {useRef} from 'react';
import {useParams} from "react-router-dom";

export function Filtro({data}) {

    const [filtroAtivo, setFiltroAtivo] = React.useState(null)
    const URL = useParams()
    let filtros = []
    let produtosOriginais = useRef(data.produtos)

    React.useEffect(()=>{
        if(filtroAtivo){
            handleFilter(filtroAtivo, produtosOriginais.current, data.setProdutos)
        }
        else{
            data.setProdutos(produtosOriginais.current)
            console.log('filtro desativado')
        }
    }, [filtroAtivo])

    function handleFilter(filter, produtos, setProdutos){
        let produtosFiltrados = []
        const categoriasFiltro = {
            'roupas': ['shirts', 'dresses', 'tops'],
            'tenis': ['shoes'],
            'relogios': ['watches'],
            'joalheria': ['glasses', 'jewellery']
        }


        if(filter === 'masculino'){
            for (const produto of produtos) {
                for (const categoria of categoriasFiltro[URL.categoria]) {
                    if(produto.category === `mens-${categoria}`)
                        produtosFiltrados.push(produto)
                }
            }
        }

        if(filter === 'feminino'){
            for (const produto of produtos) {
                for (const categoria of categoriasFiltro[URL.categoria]) {
                    if(produto.category === `womens-${categoria}`)
                        produtosFiltrados.push(produto)
                }
            }
        }

        if(filter === 'caro'){
            produtos.sort( (a, b)=>{
                return b.price - a.price
            })

            produtosFiltrados = [...produtos]
        }

        if(filter === 'barato'){
            produtosFiltrados = produtos.sort( (a, b)=>{
                return a.price - b.price
            })

            produtosFiltrados = [...produtos]
        }

        if(filter === 'oculos'){
            for (const produto of produtos) {

                for (const categoria of categoriasFiltro[URL.categoria]) {
                    if(produto.category === `sun${categoria}`)
                    {
                        produtosFiltrados.push(produto)
                    }
                }
            }
        }

        if(filter === 'joia'){

            for (const produto of produtos) {

                for (const categoria of categoriasFiltro[URL.categoria]) {
                    console.log(produto.category === categoria)
                    if(produto.category === `womens-${categoria}`)
                        produtosFiltrados.push(produto)
                }
            }
        }

        setProdutos(produtosFiltrados)
    }

    switch (URL.categoria){
        case 'roupas':
        case 'relogios':
        case 'tenis':
            filtros = ['Masculino', 'Feminino', 'Caro', 'Barato']
            break;

        case 'joalheria':
            filtros = ['Oculos', 'Joia', 'Caro', 'Barato']
            break
    }

// 1E1E1EFF
    return (
        <section id={'container_filtro'}>
            {
                filtros.map((filtro, i)=>{
                    return <button key={i}
                                   onClick={(e)=> {
                                       setFiltroAtivo((prev)=>{
                                           console.log(e.target.textContent.toLowerCase())
                                           if( prev !== null && prev === e.target.textContent.toLowerCase()){
                                               return null
                                           }
                                           else if(prev !== null && prev !== e.target.textContent.toLowerCase()){
                                               return e.target.textContent.toLowerCase()
                                           }
                                           else{
                                               return e.target.textContent.toLowerCase()
                                           }
                                       })
                                   }}
                                   className={'btn_filtro'}>{filtro}</button>
                })
            }
        </section>
    );
}

