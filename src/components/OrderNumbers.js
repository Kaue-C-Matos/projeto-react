import { useState } from "react";
import "./UserInfo.css";

const OrderNumbers = () =>{
    const [num = [2, 5, 1, 8, 6, 40, 9, 2, 19, 2], setNum] = useState()

    const ordenedNumbers = () =>{
        if (num) {
            setNum(num.sort(function(a, b){return a-b}))
        }
    }


    return(
        <div>
            <button onClick={ordenedNumbers}>Ordenar números</button>
            <h4>{num.map(Num=> <text>{Num}, </text>)}</h4>
        </div>
    )

}

export default OrderNumbers