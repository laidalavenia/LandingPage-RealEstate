import React from 'react';
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import logoBrand from '../assets/images/treva.png';
import heroImage from '../assets/images/Estately.png';
import '../styles/NavComp.css';

const NavComp = () => {
  return (
    <div className='container-hero'>
      <Navbar>
        <Container>
          <img src={logoBrand} alt="logo" width="130px" height="140px" className="logo-brand" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-content me-auto">
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Rent
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Sell
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav.Link href="login" className="btn-login">
          Login
        </Nav.Link>
        <Button variant="dark" style={{ borderRadius: '15px' }}>
          Create Account
        </Button>
      </Navbar>
      <div className="content-hero">
        <h1>
          Investing In Your Future <br /> One Home At A Time{' '}
        </h1>
        <p>
          We'll you find the key to your dream home. Experience the joy of <br /> homeownership. Let us make your home buying journey simple.{' '}
        </p>
        <Button variant="outline-dark" style={{ fontWeight: 'bold', borderRadius: '15px' }}>
          Get Started
        </Button>
      </div>
      <img src={heroImage} alt="heroImage" width="1300px" height="600px" className="hero-image" />

      <div className="map">
        <div className="box">
          <Row >
            <Col md={3} style={{padding: '1rem'}}>
              <h5 style={{ fontWeight: 'bold' }}>Location</h5>
              <h5 style={{ fontWeight: 'normal', lineHeight: '3em' }}>Bangladesh</h5>
            </Col>
            <Col md={3} style={{padding: '1rem'}}>
              <h5 style={{ fontWeight: 'bold' }}>Property Type</h5>
              <h5 style={{ fontWeight: 'normal', lineHeight: '3em' }}>Duplex</h5>
            </Col>
            <Col md={3} style={{padding: '1rem'}}>
              <h5 style={{ fontWeight: 'bold' }}>Budget</h5>
              <h5 style={{ fontWeight: 'normal', lineHeight: '3em' }}>$12.000</h5>
            </Col>
            <Col md={3}>
            <Button variant="primary" style={{ fontWeight: 'bold', borderRadius: '15px',  marginLeft:'2px', }}>Search Property</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default NavComp;
