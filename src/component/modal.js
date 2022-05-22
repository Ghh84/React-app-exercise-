import React from 'react';
import {Modal } from "react-bootstrap";
import Button from './button';
import Input from './input';
import Select from './select';
 const Modalpage = ({show, setShow,title, setTitle, deadline,setDeadline, status,setStatus,
     handleClose, handleAdd,handleChange, options}) => {
    
    // var colors = ["#e57373", "#ba68c8", "#90caf9"]
     return ( 
        <Modal show={show}  onHide={handleClose} backdrop="static" keyboard={true} >
            <Modal.Header closeButton className='teableHeader'>
                <Modal.Title>Add new to do</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Input  label="Title"   action={setTitle} value={title} type="text" />
                    <Input  label="Deadline"  action={setDeadline} value={deadline} type="text" />
                    <Select options={options} label='status' handleChange={handleChange} value={status} /> 
                </Modal.Body>
                <Modal.Footer>
                    <Button label='Close' handleModalOpen={handleClose}/>
                    <Button label='Add' handleModalOpen={()=>handleAdd()}>Add</Button>
                </Modal.Footer>
        </Modal>
    );
 }
  
 export default Modalpage;