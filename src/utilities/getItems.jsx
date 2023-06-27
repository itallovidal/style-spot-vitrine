async function getItems(categoria, limite = 3){
    const resposta = await fetch(`https://dummyjson.com/products/category/${categoria}?limit=${limite}`)
    const itens = await resposta.json()
    console.log(itens)
    return itens.products
}

export default getItems