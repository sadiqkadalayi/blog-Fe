import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import './NavBarr.css'

function NavBaarrrrr() {

const navigate=useNavigate();

const logout = ()=>{
  localStorage.clear();
  navigate('/login')
}

  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Web application</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="">
              <Link className='linkto' to={'/'}>
              Home
              </Link></Nav.Link>
            <Nav.Link href="">
              <Link className='linkto' to={'/books'}>
              Books
              </Link></Nav.Link>
            
            <NavDropdown title="Blog" id="collapsible-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1"><Link className='linkto' to={'/create-post'}>Create Blog</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link className='linkto' to={'/post'}>
                View posts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link eventKey={2} href="">
              <button className='btn btn-danger' onClick={logout}>Logout</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBaarrrrr