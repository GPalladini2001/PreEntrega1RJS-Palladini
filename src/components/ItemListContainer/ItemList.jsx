import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {

  return (
    <div>
        {productos.map((e) => (
        <Item
        id = {e.id}
        key = {e.id}
        title = {e.title}
        description ={e.description}
        price = {e.price}
        image = {e.image}/>
        
        ))}
    </div>
  )
}

export default ItemList