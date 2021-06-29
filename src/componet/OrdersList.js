import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

function OrdersList() {
    const [orders, setOrders] = useState([]);
    const { userId} = useParams();

    async function getOrders() {
        // const reponse = await axios.get('http://localhost:5000/api/v1/orders/');
        const reponse = await axios.get(`http://localhost:5000/api/v1/users/${userId}/orders`);
        setOrders(reponse.data);
    }
    async function updateDestination() {
        const reponse = await axios.get('http://localhost:5000/api/v1/users/:orderId/destination');
        setOrders(reponse.data);
    }

    async function cancel() {
        const reponse = await axios.get('http://localhost:5000/api/v1/order/:orderId/cancel');
        setOrders(reponse.data);
    }
    useEffect(() => {
        getOrders();
        // updateDestination();
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
                    <li>Destination:</li>
                    {/* <li><Link to={`/users/${orderId}/destination`}>{order.destination}</Link></li> */}
                    <li><Link to={`users/${order._id}/create`}>{order.destination}</Link></li>
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
                    <li><Link onClick={cancel}>Cancel</Link></li>
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
