import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

const Header = () => {
    return (
        <>
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Gom Showroom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Peluches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kpop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}

export default Header