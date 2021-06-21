import React from 'react'

function ParcelList({ parcelOrders }) {
    function renderParcelOrders() {
        return parcelOrders.map((parcelOrder, i) => {
            return (
                <ul key={i}>
                    <li>Product: {parcelOrder.product}</li>
                    <li>Quantity: {parcelOrder.quantity}</li>
                    <li>Pickup: {parcelOrder.pickup}</li>
                </ul>
            )
        })
    }
    return (
        <div>

            {renderParcelOrders()}

        </div>
    )
}

export default ParcelList
