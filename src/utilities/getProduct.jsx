const imgs = [
    '/images/list/shoes/shoes1.jpg',
    '/images/list/shoes/shoes2.jpg',
    '/images/list/shoes/shoes3.jpg',
    '/images/list/shoes/shoes4.jpg',
    '/images/list/shoes/shoes5.jpg',
]

const categorias = {
    'mens-shoes': 'men\'s clothing',
    'womens-shoes': 'women\'s clothing',

    'mens-shirts': 'men\'s clothing',
    'womens-dresses': 'women\'s clothing',
    'tops': 'women\'s clothing',

    'mens-watches': 'men\'s clothing',
    'womens-watches': 'men\'s clothing',

    'sunglasses': 'jewelery',
    'womens-jewellery': 'jewelery',
}

async function getProduct(search, categoria){

    const query = `https://dummyjson.com/products/${search.get('idPrincipal')}`
    const response = await fetch(query)
    const produto = await response.json()

    if(search.get('idSecundario') !== 'none' && search.get('p') !== 'shoes'){
        const query2 = `https://fakestoreapi.com/products/${search.get('idSecundario')}`
        const response2 = await fetch(query2)
        const produto2 = await response2.json()
        produto.images.unshift(produto2.image)
    }

    if(search.get('p') === 'shoes'){
        produto.images.unshift(imgs[search.get('idSecundario')])
    }

    const query3 = `https://fakestoreapi.com/products/category/${categorias[categoria]}`
    const response3 = await fetch(query3)
    const produto3 = await response3.json()

    // (max - min ) + min
    const nAleatorio = Math.round(Math.random() * (3 - 0 ) + 0)

    produto.description =  produto3[nAleatorio].description


    return produto
}

export default getProduct
