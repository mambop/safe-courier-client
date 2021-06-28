import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import OrderForm from './OrderForm'

function Orders() {
    const [orders, setOrders] = useState([]);
    const {userId, orderId} = useParams();

    async function getOrders() {
        // const reponse = await axios.get('http://localhost:5000/api/v1/orders/');
        const reponse = await axios.get(`http://localhost:5000/api/v1/users/${userId}/orders`);
        setOrders(reponse.data);
    }
    async function updateDestination() {
        const reponse = await axios.get(`http://localhost:5000/api/v1/users/${orderId}/destination`);
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
                    <li>{order.name}</li>
                    <li>{order.contact}</li>
                    <li>{order.order}</li>
                    <li>{order.pickup}</li>
                    <li><Link to={'/orders/'+orderId+'/destination'}>{order.destination}</Link></li>
                    <li>{order.status}</li>
                    <li>{order.presentLoc}</li>
                </ul>

            )
        })
    }
    return (
        <div>
            <OrderForm getOrders={getOrders}/>
            {renderOrders()}
        </div>
    )
}

export default Orders
