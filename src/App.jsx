import React, { useState } from 'react';
import './App.css';
import { APIURL, callApi } from './lib';

const App = () => {
  const [data, setData] = useState({
    title: '',
    category: '',
    description: '',
    email: ''
  });
  function submitTicket(){
    if(data.email === ''){
      alert("Email ID is required");
      return;
    }
    const inputData = JSON.stringify({
      toemail: data.email
    });
    callApi("POST", APIURL + "email/send", inputData, getResponse);
  }
  function getResponse(res){
    alert(res.msg);
  }

  function handleInput(e){
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  return (
    <div className='app'>
      <div className="panel">
        <h3>Create Support Ticket</h3>
        <label>Ticket Title</label>
        <input type='text' placeholder='Title' name='title' value={data.title} onChange={(e)=>handleInput(e)}/>
        <label>Ticket Category</label>
        <select placeholder='Category' name='category' value={data.category} onChange={(e)=>handleInput(e)}>
          <option value='' >Select Category</option>
          <option value={1}>Technical Support</option>
          <option value={2}>Billing</option>
          <option value={3}>Others</option>
        </select>
        <label >Ticket Description</label>
        <textarea placeholder='Description' name='description' value={data.description} onChange={(e)=>handleInput(e)}/>
        <label>Email ID</label>
        <input type='email' placeholder='Email ID' name='email' value={data.email} onChange={(e)=>handleInput(e)}/>
        <button onClick={()=>submitTicket()}>Submit</button>
      </div>
    </div>
  );
}

export default App;