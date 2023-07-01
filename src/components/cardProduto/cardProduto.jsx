import {Link} from "react-router-dom";
import './cardProduto.css'

function CardProduto({dados}) {

    if(dados.fakeStoreID !== undefined){
        dados.idSecundario = dados.fakeStoreID
    }

    if(dados.shoesID !== undefined){
        dados.idSecundario = dados.shoesID
    }

    const query = `search?idPrincipal=${dados.id}&idSecundario=${dados.fakeStoreID !== undefined ? dados.fakeStoreID : 'none' }`
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

            <Link to={`/produtos/${dados.category}/${query}`}>Ver Produto</Link>
        </div>
    );
}

export default CardProduto;