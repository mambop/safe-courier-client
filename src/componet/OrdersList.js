// import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosApp from "../axiosConfig";

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [destination, setNewDestination] = useState("");
  const { userId } = useParams();
  const history = useHistory();

  async function userOrders() {
    // const response = await axios.get(`https://safe-courier-app.herokuapp.com/api/v1/users/${userId}/orders`);

    const res = await axiosApp.get(`/api/v1/users/${userId}/orders`);

    if (res.data.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.data;
  }

  // update order destination
  async function updateDestination(id) {
    // await axios.put(`https://safe-courier-app.herokuapp.com/api/v1/orders/destination/`, {
    await axiosApp.put("/api/v1/orders/destination/", {
      id: id,
      destination: destination,
    });
  }

  async function cancelOrder(orderId) {
    // await axios.delete(`https://safe-courier-app.herokuapp.com/api/v1/orders/cancel/${orderId}`);
    await axiosApp.delete(`/api/v1/orders/cancel/${orderId}`);

    history.push("/api/v1/users/orders");
  }

  useEffect(() => {
    let isSubscribed = true;
    userOrders().then((orders) => {
      if (isSubscribed) {
        setOrders(orders);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  function renderOrders() {
    return orders.map((order, i) => {
      return (
        <ul key={i} className="container pt-4 bg-light list-group">
          <li className="list-group-item">Recepient Name: {order.name}</li>

          <li className="list-group-item">
            Recipients Contact: {order.contact}
          </li>

          <li className="list-group-item">Order: {order.order}</li>

          <li className="list-group-item">
            Destination : <span>{order.destination}</span>
            <br />
            <input
              className="mr-sm-2"
              type="text"
              placeholder="Update Destination"
              onChange={(e) => {
                setNewDestination(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={() => {
                updateDestination(order._id);
              }}
            >
              Update
            </button>
          </li>

          <li className="list-group-item">Pickup Location: {order.pickup}</li>

          <li className="list-group-item">
            Present Location: {order.presentLoc}
          </li>

          <li className="list-group-item">Status: {order.status}</li>

          <li className="list-group-item">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={() => {
                cancelOrder(order._id);
              }}
            >
              Cancel
            </button>
          </li>
        </ul>
      );
    });
  }
  return <div>{renderOrders()}</div>;
}

export default OrdersList;
