import React from 'react';
import { useParams} from "react-router-dom";


function Filtro({func}) {
    const URL = useParams()
    let filtros = []

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



    return (
        <section id={'container_filtro'}>
            {
                filtros.map((filtro, i)=>{
                    return <span key={i} onClick={func} className={'btn_filtro'}>{filtro}</span>
                })
            }
        </section>
    );
}

export default Filtro;