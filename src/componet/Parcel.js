import axios from 'axios'
import React,{useEffect, useState} from 'react'
import ParcelForm from './ParcelForm'
import ParcelList from './ParcelList'

function Parcel() {

const [parcelOrders, setPacelOrder] = useState([])
async function getParcelOrders(){
    const parcelOrderRes = await axios.get("https://safe-courier-app.herokuapp.com/parcels");
    setPacelOrder(parcelOrderRes.data);
}
useEffect(()=>{
    getParcelOrders()
},[])
    return (
        <div>
            <ParcelForm getParcelOrders={getParcelOrders}/>
            <ParcelList parcelOrders={parcelOrders}/>

        </div>
    )
}

export default Parcel
