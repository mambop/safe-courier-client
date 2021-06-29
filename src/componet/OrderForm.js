import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrderForm({ getOrders }) {
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [order, setOrder] = useState();
    const [destination, setDestination] = useState();
    const [pickup, setPickup] = useState();

    const {userId} = useParams();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const orderData = { name, contact, order, destination, pickup };
            await axios.post(`http://localhost:5000/api/v1/users/${userId}/create`, orderData);
            getOrders();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <input type="text" placeholder="Recipients Name" onChange={(e) => { setName(e.target.value) }} value={name} />
                </div>
                <div>
                    <input type="text" placeholder="Recipients Contact" onChange={(e) => { setContact(e.target.value) }} value={contact} />
                </div>
                <div>
                    <input type="text" placeholder="Order" onChange={(e) => { setOrder(e.target.value) }} value={order} />
                </div>
                <div>
                    <input type="text" placeholder="Destination" onChange={(e) => { setDestination(e.target.value) }} value={destination} />
                </div>
                <div>
                    <input type="text" placeholder="Pickup Location" onChange={(e) => { setPickup(e.target.value) }} value={pickup} />
                </div>
                {/* <div>
                    <label>Present Location:<span onChange={(e) => { setPresentLoc(e.target.value) }} value={presentLoc}>None</span></label>
                </div>
                <div>
                    <label>Status:<span onChange={(e) => { setStatus(e.target.value) }} value={status}>None</span></label>
                </div> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default OrderForm
