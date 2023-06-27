import {Link} from "react-router-dom";
import './cardProduto.css'

function CardProduto({dados}) {

    return (
        <div className='container_card'>
            <picture>
                <img src={dados.images[0]} alt=""/>
                <span className={'preco'}> ${dados.price}</span>
            </picture>
            <div className={'info_produto'}>
                <span className={'nomeProduto'}> {dados.title}</span>
                <span className={'marcaProduto'}> {dados.brand}</span>
            </div>

            <Link to={'/'}>Ver Produto</Link>
        </div>
    );
}

export default CardProduto;