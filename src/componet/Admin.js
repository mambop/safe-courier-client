import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Admin() {

  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();
  const [presentLoc, setPresentLoc] = useState();

  // get user order
  async function getOrders() {
    const reponse = await axios.get('http://localhost:5000/api/v1/admin/');
    setOrders(reponse.data);
  }


  // update user order fields
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const orderAdminData = { status, presentLoc };
      await axios.post('http://localhost:5000/api/v1/admin/', orderAdminData);
      getOrders();
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getOrders();
  });

  //display updated orders
  function renderUpdates() {
    return orders.map((order, i) => {
      return (
        <ul key={i}>
          <li>{order.name}</li>
          <li>{order.contact}</li>
          <li>{order.order}</li>
          <li>{order.pickup}</li>
          <li>{order.destination}</li>
          <li>{order.status}</li>
          <li>{order.presentLoc}</li>
        </ul>

      )
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Status" onChange={(e) => { setStatus(e.target.value) }} value={status} />
        </div>
        <div>
          <input type="text" placeholder="Present Location" onChange={(e) => { setPresentLoc(e.target.value) }} value={presentLoc} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {renderUpdates()}
    </div>
  )
}

export default Admin
