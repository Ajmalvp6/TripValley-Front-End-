import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { accessSinglePackageApi } from "../services/allApis";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import './singleView.css'



function SingleView() {
  const { id } = useParams();

  const [singlePackage, setSinglePackage] = useState({});

  const singleView = async () => {
    const result = await accessSinglePackageApi(id);

    setSinglePackage(result.data);
  };

  useEffect(() => {
    singleView();
  },[]);

  const item =singlePackage

  

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  console.log(item);
  

  return (
    <div style={{padding:"60px 0px"}} className="mt-5 bg-light">
      
      
     <Container fluid>
      <Link to={`/home/#packs`}><button className="btn btn-success mb-2"><i class="fa-solid fa-backward me-2"></i>back to destinations</button></Link>
          <Row className="justify-content-center">
            <Col lg={8} md={10} sm={12}>
              <Card className="shadow-lg text-left rounded-4">
                <Card.Img 
                  variant="top" 
                  src={item.imageUrl} 
                  className="img-fluid" 
                  
                />
                <Card.Body>
                  
                 
                  <ListGroup className="mt-4">
                    <ListGroup.Item><h3>{item.title}</h3></ListGroup.Item>
                    <ListGroup.Item><p>{item.description}</p></ListGroup.Item>
                    <ListGroup.Item>package price :  {item.price} </ListGroup.Item>
                    
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
     </Container>
    
  </div>
    
  );
}

export default SingleView;
