import React, {useState, useEffect } from 'react';
import Button from './component/button';
import Modalpage from './component/modal';
import {getDataToDo,saveDataToDo}from './services/dataService'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  // state the app variables
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const [title,setTitle]=useState('')
  const [deadline, setDeadline]=useState('')
  const [status, setStatus]=useState('')
  const [toDoData, setDataToDo]=useState([])
  const[isAdd,setButton]=useState(1)
  const options=[['done','#5BC85B'],['in progress','#FFDF00'],['not stated','#e57373']]
 // handling components actions [ modal open, button click, input change]
  function handleModalOpen(){
    setShow(true)
  }
  //for this task update and add perform same operation 
  function handleAdd(){
    const item=[{status:`${status}`,title:`${title}`,deadline:`${deadline}`}]
    saveDataToDo(item)
  }
  function handleChange(status){
    setStatus(status); 
    const item=[{status:`${status}`,title:`${title}`,deadline:`${deadline}`}]
    saveDataToDo(item)
    handleClose()
  }
  function handleOnselect(){
    setButton(0)
    setShow(true)
  }
  function handleUpdate(){
    //
    alert('Updated')
  }
  function createKey(item, column){
    return item+ column;
  };
  //Use useEffect to get intial data from backend or file
  //to get data it while page load
 useEffect(()=>{
   //get save data from dataService file
   const data=getDataToDo();
   setDataToDo(data)
 })

  return (
    // calling components while needs
    <div className="App"> 
    <Button label='Add new to do' handleModalOpen={handleModalOpen}/>
    {/* to show or hide the modal  */}
    <Modalpage show={show} setShow={setShow} title={title} setTitle={setTitle} deadline={deadline} 
       setDeadline={setDeadline} status={status} setStatus={setStatus} handleModalOpen={handleModalOpen}
       handleClose={handleClose} handleAdd={handleAdd} handleChange={handleChange} options={options} isAdd={isAdd} handleUpdate={handleUpdate}
    />
    {/*display the list items: for this implementation data is saved as array of object in dataService file temporary.*/}
    {toDoData.map((item)=>(
      <ul className="list" style={{backgroundColor:`${item.status}`}}>  
          <li className="list-group-item" key={createKey(item.id, '1')}>
              <span className='span'>Title:</span>
              <a href='#' onClick={()=>handleOnselect()}>{item.title}</a>
          </li>
          <li className="list-group-item" key={createKey(item.id, '2')}>
              <span className='span'>Deadline:</span> 
              <a href='#' onClick={()=>setShow(true)}>{item.deadline}</a>
          </li>
     </ul>
    ))}
   
   </div>
  )
}

export default App;
