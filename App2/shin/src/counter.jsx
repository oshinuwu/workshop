import React, { useEffect, useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
           
            <p> Count:{count}</p>
            <button id="button-1" onClick={() => setCount(count + 1)}>Increment </button>

            <button id="button-1" onClick={() => setCount(count - 1)}>Decrement </button>
            
        </div>
    );
}
export default Counter;