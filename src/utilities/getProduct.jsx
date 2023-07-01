async function getProduct(search){

    console.log(search.get('idPrincipal'))
    const query = `https://dummyjson.com/products/${search.get('idPrincipal')}`
    const response = await fetch(query)
    const produto = await response.json()

    if(search.get('idSecundario') !== 'none'){
        const query2 = `https://fakestoreapi.com/products/${search.get('idSecundario')}`
        const response2 = await fetch(query2)
        const produto2 = await response2.json()
        produto.images.unshift(produto2.image)
    }

    return produto
}

export default getProduct
