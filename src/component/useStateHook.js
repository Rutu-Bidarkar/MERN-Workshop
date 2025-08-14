import { useState } from "react";

export default function UseStateDemo()
{
    const [numFirst, setNumFirst] = useState(0);
    const [numSecond, setNumSecond] = useState(0);
    const [sum, setSum] = useState(0);


    const updateFirstNumber = (event) => {
        setNumFirst(event.target.value);
    };

    const updateSecondNumber = (event) => {
        setNumSecond(event.target.value);
    };

    const calculate = ()=>
    {
        setSum(parseInt(numFirst) + parseInt(numSecond));
    };

    return (
        <div>
            <h2>Enter First Value:</h2>
            <input type="text" name="number1" onChange={updateFirstNumber}/>
            <h2>Enter Second Value:</h2>
            <input type="text" name="number2" onChange={updateSecondNumber}/>

            <input type="button" onClick={calculate} value="Calculate Sum"/>

            <h1>Total: {sum}</h1>

        </div>
    );
}