import React from "react";
import "./Options.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Options=({option,testResult,matchingResult})=>{
 
console.log(matchingResult)
 const notify = () => toast(matchingResult);
return(

    <div>
<div className="options my-6">

<button onClick={()=>testResult({option})}>
<button onClick={notify}>
<p><input type="radio"value="option"/>{option}
</p></button>


</button>
<ToastContainer />

</div>
    </div>
)


}
export default Options