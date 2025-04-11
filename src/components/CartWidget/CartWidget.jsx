import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function CartWidget() {
  return (
    <Navbar bg="info">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Carrito
            3
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default CartWidget