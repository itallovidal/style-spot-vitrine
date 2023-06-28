import {Link} from "react-router-dom";
import './cardProduto.css'

function CardProduto({dados}) {

    return (
        <div key={dados.id} className='container_card'>
            <picture>
                <img
                    onLoad={(e)=> e.target.complete && e.target.classList.remove('loading-img')}
                    src={dados.images[0]}
                    alt=""
                    className={'loading-img'}
                />
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