import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import image1 from '../assets/images/hero-image.jpg';
import location from '../assets/images/location.png';
import '../styles/Property.css';
import bed from '../assets/images/double-bed.png';
import car from '../assets/images/electric-car.png';
import bath from '../assets/images/bathtub.png';

const Property = () => {
  return (
    <div className="container-property">
      <div className="content-property" style={{ marginTop: '20rem', textAlign: 'center', lineHeight: '2em' }}>
        <h1>Our Popular Property </h1>
        <p>
          Look For An Agency With A Person Track Record Of Succes In Buying. Setting, Or Renting <br /> Properties. You Want An Agency That Has Been In The Industry For A While
        </p>
      </div>
      <div className="card-content" style={{ marginTop: '5rem', marginLeft: '6rem' }}>
        {/* card section 1 */}
        <Row style={{ marginTop: '5rem' }}>
          <Col md={4}>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title style={{ color: '#4B73FF' }}>$50,200,0</Card.Title>
                <p style={{ fontWeight: '520' }}>The Bismillah Apartment</p>
                <div className="x-divider"></div>
                <img src={location} style={{ height: '1.5rem', marginTop: '1rem' }} />
                <p style={{ marginTop: '-1.5rem', position: 'absolute', marginLeft: '2rem' }}>Indonesia</p>

                {/* <Card.Text style={{marginTop:'1rem'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
              </Card.Body>
              <Row style={{marginTop:'-9px'}}>
                <Col md={4}>
                  <img src={bed} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>4 Bed</p>
                </Col>
                <Col md={4}>
                  <img src={bath} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>2 Bath</p>
                </Col>
                <Col md={4}>
                  <img src={car} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '0.5rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '2.5rem' }}>1 Parking</p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title style={{ color: '#4B73FF' }}>$50,200,0</Card.Title>
                <p style={{ fontWeight: '520' }}>The Bismillah Apartment</p>
                <div className="x-divider"></div>
                <img src={location} style={{ height: '1.5rem', marginTop: '1rem' }} />
                <p style={{ marginTop: '-1.5rem', position: 'absolute', marginLeft: '2rem' }}>Indonesia</p>

                {/* <Card.Text style={{marginTop:'1rem'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
              </Card.Body>
              <Row style={{marginTop:'-9px'}}>
                <Col md={4}>
                  <img src={bed} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>4 Bed</p>
                </Col>
                <Col md={4}>
                  <img src={bath} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>2 Bath</p>
                </Col>
                <Col md={4}>
                  <img src={car} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '0.5rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '2.5rem' }}>1 Parking</p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title style={{ color: '#4B73FF' }}>$50,200,0</Card.Title>
                <p style={{ fontWeight: '520' }}>The Bismillah Apartment</p>
                <div className="x-divider"></div>
                <img src={location} style={{ height: '1.5rem', marginTop: '1rem' }} />
                <p style={{ marginTop: '-1.5rem', position: 'absolute', marginLeft: '2rem' }}>Indonesia</p>

                {/* <Card.Text style={{marginTop:'1rem'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
              </Card.Body>
              <Row style={{marginTop:'-9px'}}>
                <Col md={4}>
                  <img src={bed} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>4 Bed</p>
                </Col>
                <Col md={4}>
                  <img src={bath} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>2 Bath</p>
                </Col>
                <Col md={4}>
                  <img src={car} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '0.5rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '2.5rem' }}>1 Parking</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* card section 2 */}
        <Row style={{ marginTop: '5rem' }}>
        <Col md={4}>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title style={{ color: '#4B73FF' }}>$50,200,0</Card.Title>
                <p style={{ fontWeight: '520' }}>The Bismillah Apartment</p>
                <div className="x-divider"></div>
                <img src={location} style={{ height: '1.5rem', marginTop: '1rem' }} />
                <p style={{ marginTop: '-1.5rem', position: 'absolute', marginLeft: '2rem' }}>Indonesia</p>

                {/* <Card.Text style={{marginTop:'1rem'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
              </Card.Body>
              <Row style={{marginTop:'-9px'}}>
                <Col md={4}>
                  <img src={bed} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>4 Bed</p>
                </Col>
                <Col md={4}>
                  <img src={bath} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>2 Bath</p>
                </Col>
                <Col md={4}>
                  <img src={car} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '0.5rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '2.5rem' }}>1 Parking</p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title style={{ color: '#4B73FF' }}>$50,200,0</Card.Title>
                <p style={{ fontWeight: '520' }}>The Bismillah Apartment</p>
                <div className="x-divider"></div>
                <img src={location} style={{ height: '1.5rem', marginTop: '1rem' }} />
                <p style={{ marginTop: '-1.5rem', position: 'absolute', marginLeft: '2rem' }}>Indonesia</p>

                {/* <Card.Text style={{marginTop:'1rem'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
              </Card.Body>
              <Row style={{marginTop:'-9px'}}>
                <Col md={4}>
                  <img src={bed} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>4 Bed</p>
                </Col>
                <Col md={4}>
                  <img src={bath} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>2 Bath</p>
                </Col>
                <Col md={4}>
                  <img src={car} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '0.5rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '2.5rem' }}>1 Parking</p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title style={{ color: '#4B73FF' }}>$50,200,0</Card.Title>
                <p style={{ fontWeight: '520' }}>The Bismillah Apartment</p>
                <div className="x-divider"></div>
                <img src={location} style={{ height: '1.5rem', marginTop: '1rem' }} />
                <p style={{ marginTop: '-1.5rem', position: 'absolute', marginLeft: '2rem' }}>Indonesia</p>

                {/* <Card.Text style={{marginTop:'1rem'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
              </Card.Body>
              <Row style={{marginTop:'-9px'}}>
                <Col md={4}>
                  <img src={bed} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>4 Bed</p>
                </Col>
                <Col md={4}>
                  <img src={bath} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '3rem' }}>2 Bath</p>
                </Col>
                <Col md={4}>
                  <img src={car} style={{ marginTop: '1rem', height: '1.5rem', width: '1.5rem', marginLeft: '0.5rem', marginBottom: '1rem' }} />
                  <p style={{ marginTop: '-2.5rem', position: 'absolute', marginLeft: '2.5rem' }}>1 Parking</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      <Button variant="dark" style={{ borderRadius: '10px', marginLeft: '44rem', marginTop: '5rem' }}>
        Explore All Property
      </Button>
    </div>
  );
};

export default Property;
