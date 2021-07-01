import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Admin() {

  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [presentLoc, setPresentLoc] = useState("");

  // get user order
  async function getOrders() {
    const reponse = await axios.get(' https://safe-courier-app.herokuapp.com/api/v1/admin/');
    // const reponse = await axios.get('http://localhost:5000/api/v1/admin/');

    setOrders(reponse.data);
  }

  // update order status
  async function updateStatus(id) {
    await axios.put(`https://safe-courier-app.herokuapp.com/api/v1/admin/status`, {
      // await axios.put(`http://localhost:5000/api/v1/admin/status`, {
      
      id: id,
      status: status

    });
  }

  // update order present location
  async function updatePresentLoc(id) {
    await axios.put(`https://safe-courier-app.herokuapp.com/api/v1/admin/presentLoc`, {
          // await axios.put(`http://localhost:5000/api/v1/admin/presentLoc`, {
    
      id: id,
      presentLoc: presentLoc

    });
  }


  useEffect(() => {
    getOrders();
  });

  //display updated orders
  function renderUpdates() {
    return orders.map((order, i) => {
      return (
        <ul key={i} className="container pt-4 bg-light list-group">
          <li className='list-group-item'>Recepient Name: {order.name}</li>
     
          <li className='list-group-item'>Recipients Contact: {order.contact}</li>
        
          <li className='list-group-item'>Order: {order.order}</li>
       
          <li className='list-group-item'>Destination: {order.destination}</li>
       
          <li className='list-group-item'>Pickup Location: {order.pickup}</li>
       
          <li className='list-group-item'>Present Location : <span>{order.presentLoc}</span><br/>
            <input className="mr-sm-2" type="text" placeholder="Update present location" onChange={(e) => { setPresentLoc(e.target.value) }} />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { updatePresentLoc(order._id) }}>Present Location</button>

          </li>
   
          <li className='list-group-item'>Status : <span>{order.status}</span><br/>
            <input className="mr-sm-2" type="text" placeholder="Update present location" type="text" placeholder="Update Status" onChange={(e) => { setStatus(e.target.value) }} />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { updateStatus(order._id) }}>Status</button>
          </li>
        </ul>

      )
    })
  }
  return (
    <div>
      {renderUpdates()}
    </div>
  )
}

export default Admin
