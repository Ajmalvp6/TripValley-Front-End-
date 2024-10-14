import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./Landing.css"

function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  


  return (
    <div>
      <Container>
        <Row className="align-items-center py-5 px-3" style={{ marginTop: "65px", height:"80vh"}}>
          
          <Col md={6} sm={12} className="text-center mb-4">
            <div style={{ backgroundColor: "rgb(25 41 51)" }} className="rounded-5">
              <img
                src="https://i.postimg.cc/W1HypYF0/IMG-552-1647867573.jpg"
                alt="Travel"
                className="img-fluid rounded-3"
              />
            </div>
          </Col>

          <Col md={6} sm={12} className="text-md-start text-center text-white">
            <div>
              <h1 className="mb-4">Enjoy Your Travel</h1>
              <p style={{ maxWidth: "600px" }} className="mb-4">
                We create personalized travel plans to make your journeys memorable.
                Explore destinations, book your trip, and let us handle the rest.
              </p>
              <Link to={"/home"}><button className="button-styl">Packages</button></Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <hr style={{color:"white"}} />
      </Container>

      <Container className=" pb-5">
        <h3 className="text-center pb-3 text-white">Our Destinations</h3>
        <Row className="d-flex justify-content-center">
          
          <Col lg={4} md={6} sm={12} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '25rem', color: 'white' }} className="card-bg">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/hGTdJNYx/blog-post-14979-457782-ttw.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="p-5">
                <Card.Title>Thailand</Card.Title>
                <Card.Text>
                Thailand is a middle power in global affairs and a founding member of ASEAN. It has the second-largest economy in Southeast Asia and the 23rd-largest in the ...
                </Card.Text>
                <Link to={'/home'}> <button className="button-styl">Explore</button></Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '25rem',  color: 'white' }}  className="card-bg">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/B6tf7GGP/images.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="p-5">
                <Card.Title>Kerala</Card.Title>
                <Card.Text>
                Kerala is the 21st largest Indian state by area. It is bordered by Karnataka to the north and northeast, Tamil Nadu to the east and south, and the Lakshadweep ...
                </Card.Text>
               <Link to={'/home'}> <button className="button-styl">Explore</button></Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '25rem', color: 'white'}} className="card-bg">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/W13R1vhW/all-types-of-tour-services-1.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="p-5">
                <Card.Title>Singapore</Card.Title>
                <Card.Text>
                Singapore is a sunny, tropical island in Southeast Asia, off the southern tip of the Malay Peninsula. The city-state is 710 square kilometres and inhabited .
                </Card.Text>
                <Link to={'/home'}> <button className="button-styl">Explore</button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
