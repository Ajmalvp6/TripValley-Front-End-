import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Add from "../components/Add";
import Packages from "../components/Packages";


function Home() {

  const [addupdate,setAddupdate]=useState({})

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  return (
    <div style={{ marginTop: "60px", overflowX:"hidden"}}>
      <Container>
        <Row
          className="align-items-center py-5 px-3"
          style={{ marginTop: "65px", height: "80vh" }}
        >
          <Col md={6} sm={12} className=" mb-4">
            <div>
              <h1 className="mb-4 text-white">Enjoy Your Travel</h1>
              <p style={{ maxWidth: "600px" }} className="mb-4 text-white">
                We create personalized travel plans to make your journeys
                memorable. Explore destinations, book your trip, and let us
                handle the rest.
              </p>
              <Add updateadd={setAddupdate}></Add>
            </div>
          </Col>

          <Col md={6} sm={12} className="text-md-start text-center">
            <div
              style={{ backgroundColor: "rgb(25 41 51)" }}
              className="rounded-5"
            >
              <img
                src="https://i.postimg.cc/XqZwNLTD/full-shot-travel-concept-with-landmarks-23-2149153258.avif"
                alt="Travel"
                className="img-fluid rounded-3"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <hr style={{color:"white"}} />
      </Container>

      <Row>
        <Col>
          <Packages updated={addupdate}></Packages>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
