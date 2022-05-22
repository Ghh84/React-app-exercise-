import React from 'react';
import {Modal } from "react-bootstrap";
import Button from './button';
import Input from './input';
import Select from './select';
 const Modalpage = ({show,title, setTitle, deadline,setDeadline, status,setStatus,
     handleClose, handleAdd,handleChange, options, isAdd,handleEdit}) => {
         // design of dialog modal based on props
     return ( 
        <Modal show={show}  onHide={handleClose} backdrop="static" keyboard={true} >
            <Modal.Header closeButton className='teableHeader'>
                <Modal.Title>Add new to do</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Input  label="Title"   handleInputChange={setTitle} value={title} type="text" />
                    <Input  label="Deadline"  handleInputChange={setDeadline} value={deadline} type="text" />
                    <Select options={options} label='status' handleChange={handleChange} value={status} /> 
                </Modal.Body>
                <Modal.Footer>
                    <Button label='Close' handleModalOpen={handleClose}/>
                    {isAdd?(
                    <Button label='Add' handleModalOpen={()=>handleAdd()}/>):
                    <Button label='update' handleModalOpen={()=>handleEdit()}/>
                    }
                </Modal.Footer>
        </Modal>
    );
 }
  
 export default Modalpage;