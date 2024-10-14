import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BookOpen, Edit, Trash2 } from "react-feather";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
  accessSinglePackageApi,
  delePackageApi,
  editPackageApi,
} from "../services/allApis";
import Swal from 'sweetalert2'






function PackageCard({ data, getPack }) {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  

  const Setdata = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // delete video api

  const deletePackage = async (id) => {
    const packid = id;

    await delePackageApi(packid);
    getPack();
  };

  const editPack = async (id) => {
    const result = await accessSinglePackageApi(id);
    setInputs(result.data);
    handleShow();
  };

  // edit pack api

  const edit = async () => {
    await editPackageApi(data.id, inputs);
    // alert("edited successfully");
    Swal.fire({
      title: "edited successfully",
      text: "You clicked the button!",
      icon: "success"
    });
  
    getPack();
    handleClose();
    
    

  
    
  };

  return (
    <div>
      <Card
        style={{ width: "25rem", color: "white", position: "relative" }}
        className="card-bg"
      >
        <Card.Img
          variant="top"
          src={data.imageUrl}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="p-5">
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description.length>80 ? data.description.slice(0,60)+"..." : data.description}</Card.Text>

            {" "}
            <Link to={`/single-view/${data.id}`}><button className="button-styl">Read More</button></Link>
          
        </Card.Body>
        <div
          className="d-flex"
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            cursor: "pointer",
          }}
        >
          <div className="d-flex p-3 ">
            <Edit className="me-3" onClick={() => editPack(data.id)}></Edit>
            <Trash2 className="me-3"  onClick={() => deletePackage(data.id)}></Trash2>
  
           <Link to={`/single-view/${data.id}`}> <BookOpen className="me-3"></BookOpen></Link>
          </div>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#00111c" }}>
          <Modal.Title className="text-white">Edit package</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#00111c", color: "black" }}>
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3 text-black"
          >
            <Form.Control
              name="title"
              value={inputs.title}
              onChange={(e) => Setdata(e)}
              type="text"
              placeholder=""
              className="text-black"
            />
          </FloatingLabel>
          <FloatingLabel
            style={{ color: "black" }}
            controlId="floatingPassword"
            label="description"
          >
            <Form.Control
              name="description"
              value={inputs.description}
              onChange={(e) => Setdata(e)}
              style={{ color: "black" }}
              type="text"
              placeholder="Password"
            />
          </FloatingLabel>

          <FloatingLabel
            className="mt-3"
            style={{ color: "black" }}
            controlId="floatingPassword"
            label="Price"
          >
            <Form.Control
              name="price"
              value={inputs.price}
              onChange={(e) => Setdata(e)}
              style={{ color: "black" }}
              type="text"
              placeholder="Password"
            />
          </FloatingLabel>

          <FloatingLabel
            className="mt-3"
            style={{ color: "black" }}
            controlId="floatingPassword"
            label="Image Url"
          >
            <Form.Control
              name="imageUrl"
              value={inputs.imageUrl}
              onChange={(e) => Setdata(e)}
              style={{ color: "black" }}
              type="text"
              placeholder="Password"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#00111c" }}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="light" onClick={edit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

     
    </div>
  );
}

export default PackageCard;
