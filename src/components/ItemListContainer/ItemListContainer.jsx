import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const productos = [
        {
            id: 1,
            titulo: "Producto1",
            descripcion: "Descripcion 1",
            precio: 100
        },
        {
            id: 2,
            titulo: "Producto2",
            descripcion: "Descripcion 2",
            precio: 200
        },
        {
            id: 3,
            titulo: "Producto3",
            descripcion: "Descripcion 3",
            precio: 300
        },
    ]
    return <ItemList productos={productos}/>
}

export default ItemListContainer
