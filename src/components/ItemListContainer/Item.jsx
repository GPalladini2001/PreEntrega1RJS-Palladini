import {Card, } from 'react-bootstrap'
import Boton from '../Boton/Boton'

const Item = ({id, title, description, price, image}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
            ${price}
        </Card.Text>
        <Boton
        label = {"Comprar"}
        type = {"success"}
        onClick={() => {
            console.log(id)
        }}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item