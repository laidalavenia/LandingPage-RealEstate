import React from 'react';
import '../styles/Sell.css';
import { Row, Col } from 'react-bootstrap';

const Sell = () => {
  return (
    <div className="container-sell">
      <Row style={{ justifyContent: 'center', padding: '6rem', marginLeft: '3rem' }}>
        <Col md={2}>
          <h1 style={{ fontWeight: 'bold', fontSize: '70px' }}>11K+</h1>
        </Col>
        <Col md={2} style={{ marginLeft: '-25px', color: '#DCDCDC', fontWeight: 'normal', marginTop: '20px' }}>
          <p>
            Happy Customers <br /> with our services
          </p>
        </Col>
        <Col md={2}>
          <h1 style={{ fontWeight: 'bold', fontSize: '70px' }}>22K+</h1>
        </Col>
        <Col md={2} style={{ marginLeft: '-25px', color: '#DCDCDC', fontWeight: 'normal', marginTop: '20px' }}>
          <p>
            The best property <br /> we provide
          </p>
        </Col>
        <Col md={2}>
          <h1 style={{ fontWeight: 'bold', fontSize: '70px' }}>520+</h1>
        </Col>
        <Col md={2} style={{ marginLeft: '-25px', color: '#DCDCDC', fontWeight: 'normal', marginTop: '20px' }}>
          <p>
            Awesome companies <br /> believe in us
          </p>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', padding: '6rem', marginLeft: '3rem' }}>
        <Col md={6}>
          <h1>
            Where Comfort Meets <br /> Convenience
          </h1>
        </Col>
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
      </Row>
      <iframe
        style={{ marginLeft: '20rem', borderRadius: '45px' }}
        width="960"
        height="560"
        src="https://www.youtube.com/embed/dE3BI3MKZDo?si=8qVOwMsC4xJllR6S"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Sell;
