import { useEffect, useState } from "react";

export default function Sideeffect() {
    const [price, setPrice]=useState(0);
    const [TotalAmount, setTotalAmount]=useState(0);

    useEffect(()=>{
        setTotalAmount(()=> price *5);
    }, [price]);

    return (
        <div>
            <h2>No. of Units is 5 </h2>
            <input type="button" onClick={()=> setPrice(price + 20)} value= "Change Price"/>
            <h2>Unit Price: {price} </h2>
            <h3>Total Amount: {TotalAmount} </h3>
        </div>
    );
}