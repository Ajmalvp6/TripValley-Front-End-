import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addPackageApi } from '../services/allApis';
import Swal from 'sweetalert2'






function Add({updateadd}) {

    const [inputs,setInputs]=useState({
        title:"",
        description:"",
        price:"",
        imageUrl:""
    })

    console.log(inputs);
    

    console.log(inputs);
    

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const Setdata=(e)=>{
        

        const {value,name}=e.target
        setInputs({...inputs,[name]:value})
        
        
    }


    // addpackage api

    const postPackage=async()=>{
        
      const {title,description,price,imageUrl}=inputs

      if(title=="" || description=="" || price=="" || imageUrl==""){
        alert("please  fill all datas")
      }
      else{
        const result = await addPackageApi(inputs)
        updateadd(inputs)
        handleClose()
        console.log(result);
        if(result.status>200 && result.status<300){
          // alert("data uploded successfully")
          Swal.fire({
            title: "New Package added successfully",
            text: "You clicked the button!",
            icon: "success"
          });
         
          


        }
        else{
          alert("data uploding failed")
        }
      }
      
    }


  return (
    <div>
        <Link to={"/home"}><button onClick={handleShow} className="button-styl">Add more packages</button></Link>

        <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"#00111c"}}>
          <Modal.Title className='text-white'>add new packages</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{backgroundColor:"#00111c", color:"black"}}>


        <FloatingLabel
        controlId="floatingInput"
        label="Title"
        className="mb-3 text-black"
      >
        <Form.Control name='title' onChange={(e)=>Setdata(e)} type="text" placeholder=""  className='text-black'/>
      </FloatingLabel>
      <FloatingLabel style={{color:"black"}} controlId="floatingPassword" label="description">
        <Form.Control name='description' onChange={(e)=>Setdata(e)} style={{color:"black"}} type="text" placeholder="Password" />
      </FloatingLabel>


      <FloatingLabel className='mt-3' style={{color:"black"}} controlId="floatingPassword" label="Price">
        <Form.Control name='price' onChange={(e)=>Setdata(e)} style={{color:"black"}} type="text" placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel className='mt-3' style={{color:"black"}} controlId="floatingPassword" label="Image Url">
        <Form.Control name='imageUrl' onChange={(e)=>Setdata(e)} style={{color:"black"}} type="text" placeholder="Password" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#00111c"}}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="light" onClick={postPackage}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  )
}

export default Add