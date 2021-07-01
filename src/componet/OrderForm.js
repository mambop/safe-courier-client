import React, { useState } from 'react'
import axios from 'axios';
import {useHistory } from 'react-router-dom';


function OrderForm({ getOrders }) {
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [order, setOrder] = useState();
    const [destination, setDestination] = useState();
    const [pickup, setPickup] = useState();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const orderData = { name, contact, order, destination, pickup };
            await axios.post('https://safe-courier-app.herokuapp.com/api/v1/orders/', orderData);
            // await axios.post('http://localhost:5000/api/v1/orders/', orderData);

            history.push("/api/v1/users/orders");

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="pt-5">
            <form onSubmit={handleSubmit}>

                <div>
                    <input className="mr-sm-2" type="text" placeholder="Recipients Name" onChange={(e) => { setName(e.target.value) }} value={name} />
                </div>
                <div>
                    <input className="mr-sm-2" type="text" placeholder="Recipients Contact" onChange={(e) => { setContact(e.target.value) }} value={contact} />
                </div>
                <div>
                    <input className="mr-sm-2"type="text" placeholder="Order" onChange={(e) => { setOrder(e.target.value) }} value={order} />
                </div>
                <div>
                    <input className="mr-sm-2" type="text" placeholder="Destination" onChange={(e) => { setDestination(e.target.value) }} value={destination} />
                </div>
                <div>
                    <input className="mr-sm-2" type="text" placeholder="Pickup Location" onChange={(e) => { setPickup(e.target.value) }} value={pickup} />
                </div>

                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default OrderForm
