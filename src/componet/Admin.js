import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Admin() {

  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [presentLoc, setPresentLoc] = useState("");

  // get user order
  async function getOrders() {
    // const reponse = await axios.get('http://localhost:5000/api/v1/admin/');
    const reponse = await axios.get('https://safe-courier-phillip.netlify.app/api/v1/admin');
    setOrders(reponse.data);
  }

  // update order status
  async function updateStatus(id) {
    await axios.put(`  https://safe-courier-phillip.netlify.app/api/v1/admin/status`, {
      
      id: id,
      status: status

    });
  }

  // update order present location
  async function updatePresentLoc(id) {
    await axios.put(`https://safe-courier-phillip.netlify.app/api/v1/admin/presentLoc`, {
    
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
        <ul key={i}>
          <li>Recepient Name:</li>
          <li>{order.name}</li>
          <br/>
          <li>Recipients Contact:</li>
          <li>{order.contact}</li>
          <br/>
          <li>Order:</li>
          <li>{order.order}</li>
          <br/>
          <li>Destination:</li>
          <li>{order.destination}</li>
          <br/>
          <li>Pickup Location:</li>
          <li>{order.pickup}</li>
          <br/>
          <li>Present Location : <span>{order.presentLoc}</span></li>
          <li>
            <input type="text" placeholder="Update present location" onChange={(e) => { setPresentLoc(e.target.value) }} />
            <button onClick={() => { updatePresentLoc(order._id) }}>Present Location</button>
          </li>
          <br/>
          <li>Status : <span>{order.status}</span></li>
          <li>
            <input type="text" placeholder="Update Status" onChange={(e) => { setStatus(e.target.value) }} />
            <button onClick={() => { updateStatus(order._id) }}>Status</button>
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
