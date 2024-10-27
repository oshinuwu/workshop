import { useState } from "react";
const TextBox = () => {
    
    const [name, setName] = useState('');

    const UpdateName = (e) => {
      setName(e.target.value);
    };
    
    const handleClick = () => {
      // Add your logic to handle the review submission here
      console.log(`Review submitted: ${name}`);
      setName(''); // Clear the input field
    };
    
    return (
      <div>
        <p>Write your Review <br/>
          {name}
        </p>
        <input className="review" value={name} onChange={UpdateName} />
        <br/>
        <div style={{color:"antiquewhite"}}>
          <button id="button-1" onClick={handleClick} > Send </button>
        </div>
      </div>
    );
}

export default TextBox;