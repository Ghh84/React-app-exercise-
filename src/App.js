import React, {useState, useEffect } from 'react';
import Button from './component/button';
import Modalpage from './component/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [show, setShow] = useState(false)
  const [showList, setShowList]=useState(false)
  const handleClose = () => setShow(false);
  const [title,setTitle]=useState('')
  const [deadline, setDeadline]=useState('')
  const [status, setStatus]=useState('')
  const options=[['done','green'],['in progress','yellow'],['not stated','red']]
  function handleModalOpen(){
    setShow(true)
  }
  function handleAdd(){
    setShowList(true)
  }
  function handleChange(status){
    setStatus(status.value);
    setShow(true)
  }

  //Use useEffect to get intioal data from backend or file


  return (
    <div className="App"> 
    <Button label='Add new to do' handleModalOpen={handleModalOpen}/>
    <Modalpage show={show} setShow={setShow} title={title} setTitle={setTitle} deadline={deadline} 
       setDeadline={setDeadline} status={status} setStatus={setStatus} handleModalOpen={handleModalOpen}
       handleClose={handleClose} handleAdd={handleAdd} handleChange={handleChange} options={options}
       />
    {showList &&
      <ul class="list" style={{backgroundColor:`${status}`}}>              
        <li class="list-group-item" >
          <span class='span'>Title:</span>
          <a href='#' onClick={()=>setShow(true)}>{title}</a>
        </li>
        <li class="list-group-item">
          <span class='span'>Deadline:</span> 
          <a href='#' onClick={()=>setShow(true)}>{deadline}</a>
        </li>
      </ul>
    }
    </div>
  );
}

export default App;
