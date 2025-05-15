import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect (() => { 
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return <ItemList productos={productos}/>
}

export default ItemListContainer
