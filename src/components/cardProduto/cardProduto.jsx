import {Link} from "react-router-dom";
import './cardProduto.css'

function CardProduto() {
    return (
        <div className='container_card'>
            <picture>
                <img src="./images/placeholder.png" alt=""/>
                <span className={'preco'}> $100</span>
            </picture>
            <div className={'info_produto'}>
                <span className={'nomeProduto'}> nome do produto</span>
                <span className={'marcaProduto'}> marca</span>
            </div>

            <Link to={'/'}>Ver mais</Link>
        </div>
    );
}

export default CardProduto;