import React from 'react';
import '../styles/About.css';
import { Row, Col, InputGroup, Button, Form } from 'react-bootstrap';
import logoBrand from '../assets/images/treva.png';
import Divider from './Divider';

const AboutFooter = () => {
  return (
    <div className="container-about">
      <Row>
        <Col md={4}>
          <img src={logoBrand} alt="logo" width="250px" height="220px" className="logo-brand" />
          <div className='promote' style={{marginLeft:'6rem'}}>
            <p style={{ lineHeight: '1.9em' }}>
              Investing In Your Future One <br /> Home At A Time
            </p>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Enter Your Email" style={{ height: '2rem', width:'125px' }} aria-describedby="basic-addon2" />
              <Button variant="primary" style={{ height: '2rem', width: '6rem', marginTop: '-0.5px' }} id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </div>
        </Col>
        <Col md={3}>
          <h3>Quick Menu</h3>
          <ul>
            <li className="content-about">
              <a href="#">Home</a>
            </li>
            <li className="content-about">
              <a href="#">Rent</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
            <li className="content-about">
              <a href="#">About</a>
            </li>
            <li className="content-about">
              <a href="#">Contact</a>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <h3>About Us</h3>
          <ul>
            <li className="content-about">
              <a href="#">Payment Plans</a>
            </li>
            <li className="content-about">
              <a href="#">Make saving More</a>
            </li>
            <li>
              <a href="#">Tax Calculator</a>
            </li>
            <li className="content-about">
              <a href="#">Talk To Us</a>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <h3>Contact Info</h3>
          <ul>
            <li className="content-about">
              123 Main Street, Apt 80 <br />
              Los Angeles, CA 9001, USA
            </li>
            <li className="content-about">+888 (123) 456-789</li>
            <li>company@gmail.com</li>
          </ul>
        </Col>
      </Row>
      <div className='last' style={{ backgroundColor: '#0c0c1d'}}>
      <Divider/>
      <p style={{marginTop:'2rem', textAlign:'center'}}>© 2023 LandingPage All Right Reserved</p>
      </div>
    </div>
  );
};

export default AboutFooter;
