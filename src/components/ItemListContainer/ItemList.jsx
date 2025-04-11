import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    console.log(productos)
  return (
    <div>
        {productos.map((e) => (
        <Item
        id = {e.id}
        key = {e.id}
        titulo = {e.titulo}
        descripcion ={e.descripcion}
        precio = {e.precio}/>
        ))}
    </div>
  )
}

export default ItemList