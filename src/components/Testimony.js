import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import user1 from '../assets/images/user.png';
import mark from '../assets/images/quote.png';

const Testimony = () => {
  return (
    <div className="container-testimony" style={{ backgroundColor: '#f7f9fb' }}>
      <h1 style={{ textAlign: 'center', lineHeight: '1.5em', padding: '5rem' }}>
        Kind Words From Our <br /> Happy Customers
      </h1>
      <Row style={{ justifyContent: 'center', padding: '5rem', marginLeft:'2rem' }}>
        <Col md={4}>
          <Card style={{ width: '25rem', height: '20rem' }}>
            <Card.Body>
              <Card.Title>
                <Image src={mark} style={{ width: '5rem', height: '5rem' }} />
              </Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
            <h5 style={{ marginLeft: '9rem', marginTop: '215px', position: 'absolute' }}>Arefin Shuvo</h5>
            <p style={{ marginLeft: '9rem', marginTop: '245px', position: 'absolute' }}>CEO, NoonBrew</p>
            <Image src={user1} roundedCircle style={{ width: '6rem', height: '6rem', marginLeft: '1rem', marginBottom: '2rem' }} />
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '25rem', height: '20rem' }}>
            <Card.Body>
              <Card.Title>
                <Image src={mark} style={{ width: '5rem', height: '5rem' }} />
              </Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
            <h5 style={{ marginLeft: '9rem', marginTop: '215px', position: 'absolute' }}>Arefin Shuvo</h5>
            <p style={{ marginLeft: '9rem', marginTop: '245px', position: 'absolute' }}>CEO, NoonBrew</p>
            <Image src={user1} roundedCircle style={{ width: '6rem', height: '6rem', marginLeft: '1rem', marginBottom: '2rem' }} />
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '25rem', height: '20rem' }}>
            <Card.Body>
              <Card.Title>
                <Image src={mark} style={{ width: '5rem', height: '5rem' }} />
              </Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
            <h5 style={{ marginLeft: '9rem', marginTop: '215px', position: 'absolute' }}>Arefin Shuvo</h5>
            <p style={{ marginLeft: '9rem', marginTop: '245px', position: 'absolute' }}>CEO, NoonBrew</p>
            <Image src={user1} roundedCircle style={{ width: '6rem', height: '6rem', marginLeft: '1rem', marginBottom: '2rem' }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimony;
