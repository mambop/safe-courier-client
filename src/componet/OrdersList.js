import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom';

function OrdersList() {
    const [orders, setOrders] = useState([]);
    const [destination, setNewDestination] = useState('');
    const { userId } = useParams();
    const history = useHistory();


    async function userOrders() {

        const response = await axios.get(`http://localhost:5000/api/v1/users/${userId}/orders`);
        setOrders(response.data);
    }

  // update order destination
    async function updateDestination(id) {
        await axios.put(`http://localhost:5000/api/v1/users/destination`, {
            id: id,
            destination: destination

        });
    
    }

    async function cancelOrder(orderId) {

        await axios.delete(`http://localhost:5000/api/v1/orders/cancel/${orderId}`);
        history.push("/api/v1/users/orders");

    }

    useEffect(() => {
        userOrders();

    });

    function renderOrders() {
        return orders.map((order, i) => {
            return (
                <ul key={i}>
                    <li>Recepient Name:</li>
                    <li>{order.name}</li>
                    <br />
                    <li>Recipients Contact:</li>
                    <li>{order.contact}</li>
                    <br />
                    <li>Order:</li>
                    <li>{order.order}</li>
                    <br />
                    <li>Destination : <span>{order.destination}</span></li>

                    <li>
                        <input type="text" placeholder="Update Destination" onChange={(e) => { setNewDestination(e.target.value) }}/>
                        <button onClick={() => { updateDestination(order._id) }}>Update</button>
                    </li>
                    <br />
                    <li>Pickup Location:</li>
                    <li>{order.pickup}</li>
                    <br />
                    <li>Present Location:</li>
                    <li>{order.presentLoc}</li>
                    <br />
                    <li>Status:</li>
                    <li>{order.status}</li>
                    <br />
                    <li><button onClick={() => { cancelOrder(order._id) }}>Cancel</button></li>
                    <br /><br />
                </ul>
            )
        })
    }
    return (
        <div>

            {renderOrders()}
        </div>
    )
}

export default OrdersList
