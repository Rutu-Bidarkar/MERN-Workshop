import React, {useState} from "react";

function Stateexample1()
{
    const {count, setCount} = useState(0);

    return (
        <>
            <p>This is from useState Example</p>
            <p>You clicked the button {count} times</p>
            <button onCLick = {() => setCount(count+1)}>Click Me</button>
        </>
    );
}

export default Stateexample1