import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#00111c" }} className="p-4 text-light" id='contact'>
      <Row>
        <Col md={3}>
          <div className="d-flex align-items-center pb-3">
            <img
              className="me-2"
              style={{ width: "50px" }}
              src="https://i.postimg.cc/43DyJj0H/images-1-removebg-preview.png"
              alt="Tourist Valley Logo"
            />
            <h5>Tourist Valley</h5>
          </div>
          <p className="">
            We create personalized travel plans to make your journeys memorable.
            Explore destinations, book your trip, and let us handle the rest.
          </p>
        </Col>

        <Col md={3}>
          <h5 className="pt-4">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
            <li><a href="#" className="text-light text-decoration-none">Destinations</a></li>
            <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
          </ul>
        </Col>

        <Col md={3}>
          <h5 className="pt-4">Contact Us</h5>
          <p> @Tourist-Valley@gmail.com</p>
          <p> +1 234 567 890</p>
          <p> 673008 Kerala Based</p>
        </Col>

        <Col md={3}>
          <h5 className="pt-4">Follow Us</h5>
        
              <a href="#" className="text-light me-5"><FaFacebook /></a>
              <a href="#" className="text-light me-5"><FaTwitter /></a>
              <a href="#" className="text-light me-5"><FaInstagram /></a>
              <a href="#" className="text-light me-5"><FaLinkedin /></a>
        
          <div className='d-flex mt-2'>
              <input type="text" className='form-control w-75'  placeholder='enter  your text'/>
              <button className='btn btn-dark ms-2'>Submit</button>
          </div>
        </Col>
      </Row>
      <hr />
      <p className='text-center pt-3 text-light-emphasis'>© All rights reserved by Ajmal V P</p>
      
    </footer>
  );
}

export default Footer;
