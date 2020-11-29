import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                  <LinkContainer to='/'>
                  <Navbar.Brand>BELANJAIN</Navbar.Brand>
                  </LinkContainer>
  
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Form inline >
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  <Nav className="ml-auto">
                    {/* Cart */}
                  <LinkContainer to='/cart'>
                     <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                     </LinkContainer>
                     {/* Login */}
                     <LinkContainer to='/login'>
                    <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
                    </LinkContainer>
                  </Nav>
          </Navbar.Collapse>
       </Container>
</Navbar>
        </header>
    )
}

export default Header
