import MessageBar from "./message";
import Counter from "./state";
import TextBox from "./text";
import Button from './button';
import './head.modules.css';
const Example=()=>{
    return(
        <div>
        <pre className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad quasi maiores accusamus.<br/> 
        Quibusdam a quisquam aliquid dignissimos numquam quidem hic aspernatur, quaerat temporibus<br/>
        atque ex corporis nulla! Rerum, nemo!</pre>
      <br></br>
        <MessageBar message="this is messagee from head.jsx"/>
        <Counter/>
        <TextBox/>
         <Button/>
         </div>
      );
    
}
export default Example;