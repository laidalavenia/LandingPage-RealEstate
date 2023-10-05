import React from 'react';
import '../styles/Client.css';
import { Row, Col, Button } from 'react-bootstrap';
import logoClient1 from '../assets/images/client-audiophile.svg';
import logoClient2 from '../assets/images/client-databiz.svg';
import logoClient3 from '../assets/images/client-maker.svg';
import logoClient4 from '../assets/images/client-meet.svg';
import contentClient from '../assets/images/img-client.jpg';

const Client = () => {
  return (
    <div className="container-client">
      <Row style={{ justifyContent: 'center', padding: '7rem' }}>
        <Col md={2}>
          <img src={logoClient1} alt="logo client audiophile" style={{ width: '120px', height: '55px' }} />
        </Col>
        <Col md={2}>
          <img src={logoClient2} alt="logo client databix" style={{ width: '160px', height: '40px' }} />
        </Col>
        <Col md={2}>
          <img src={logoClient3} alt="logo client maker" style={{ width: '140px', height: '50px' }} />
        </Col>
        <Col md={2}>
          <img src={logoClient4} alt="logo client meet" style={{ width: '140px', height: '40px' }} />
        </Col>
        <Col md={2}>
          <img src={logoClient2} alt="logo client databiz" style={{ width: '160px', height: '40px' }} />
        </Col>
      </Row>
      <Row className="hero-client">
        <Col md={6} className="client-content">
          <h1 style={{ lineHeight: '1.5em', marginBottom: '2rem' }}>
            Navigating Your <br /> Real Estate Journey
          </h1>
          <p style={{ lineHeight: '1.5em' }}>
            Look For An Agency With A Proven Track Record Of Success <br /> In Buying, Selling, Or Renting Properties. You Want An
            <br /> Agency That Has Been In The Industry For A While And Has Experience Dealing With Various Types Of Properties.{' '}
          </p>
          <Button variant="dark" style={{ borderRadius: '10px', marginLeft: '5px' }}>
            Contact Us
          </Button>
        </Col>
           <Col md={6}>
              <div className='point'>
                 <div className='card-point' >
                    <p style={{ fontWeight: 'bold', fontSize: '30px', color: '#4B73FF' }}>22K+</p>
                    <p>Property ready to <br/> buy and sell</p>
                 </div>
              </div>
          <img src={contentClient} alt="content client" style={{ width: '460px', height: '540px', borderRadius: '35px', marginLeft: '3rem' }} />
          
        </Col>
      </Row>
    </div>
  );
};

export default Client;
