import React, { useEffect, useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(" ");

    useEffect(() => {
        console.log(`count`,count)
        document.title = `You clicked ${count} times` ;
    }, [count]);
    return (
        <div className="counter">
           
            <p> Count:{count}</p>
            <button id="button-1" onClick={() => setCount(count + 1)}>Increment </button>

            <button id="button-1" onClick={() => setCount(count - 1)}>Decrement </button>
            <b />
            <p> Name:{name}</p>
            <button id="button-1" onClick={() => setName("batman")}>Setname as batman </button>
            <button id="button-1" onClick={() => setName("superman")}>Setname as superman </button>
        </div>
    );
}
export default Counter;