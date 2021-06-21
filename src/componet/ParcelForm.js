import axios from 'axios';
import React,{useState} from 'react'

function ParcelForm({getParcelOrders}) {
    const [productName, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pickup, setPickup] = useState("");

    async function submitForm(e) {
        e.preventDefault();
        try {
            const parcelData ={
              product:productName,
              quantity:quantity,
              pickup:pickup  
            } 
           await axios.post("https://safe-courier-app.herokuapp.com/",parcelData);    
           getParcelOrders(); 
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Product" onChange={(e) => { setProduct(e.target.value) }} value={productName} />
                <input type="number" placeholder="Quantity" onChange={(e) => { setQuantity(e.target.value) }} value={quantity} />
                <input type="text" placeholder="Pickup" onChange={(e) => { setPickup(e.target.value) }} value={pickup} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ParcelForm
