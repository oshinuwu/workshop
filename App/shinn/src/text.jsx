import { useState } from "react";
import MessageBar from "./message";
const TextBox = () => {
    const [name, setName] = useState('')

    const onPclick = (v) => {
        alert("heading");
    }
    
    const UpdateName = (e) => {
        const username = e.target.value;
        setName(username); // Update the state with the new value
    }
    const messages=['hey','hello','how are you'];
    return (
        <div>
            <p style={{color:"azure"}} onClick={onPclick}>this is me.{name}</p>
            <input value={name} onChange={UpdateName} />
            <div style={{color:"antiquewhite"}}>
                {
                    messages.map(message=>{
                        return <p>{message}</p>
                    })
                }
            </div>
            <div>
                {
                    messages.map(message=>{
                        return <MessageBar key={message} message={message}/>
                    })
              
                }
            </div>
        </div>
    );
}

export default TextBox;