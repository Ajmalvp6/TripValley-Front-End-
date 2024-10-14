import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <Navbar expand="lg" className="" style={{backgroundColor:"#00111c", position:"fixed", width:"100%",zIndex:"20",top:"0", overflow:"hidden", left:"0"}}>
      <Container>
        
<Link style={{textDecoration:"none"}} to={"/"}>
            <Navbar.Brand className='text-white d-flex align-items-center' href="#home"><img className='me-2' style={{width:"50px"}} src="https://i.postimg.cc/43DyJj0H/images-1-removebg-preview.png" alt="" /><h5 className='text-white'>Tourist valley</h5></Navbar.Brand>
    
</Link>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white me-5' href="/">Home</Nav.Link>
            <Nav.Link className='text-white me-5' href="/home">Destinations</Nav.Link>
            <Nav.Link className='text-white me-5' href="#contact" >About Us</Nav.Link>
            <Nav.Link className='text-white ' href="#contact">Faq</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header