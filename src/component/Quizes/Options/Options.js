import React from "react";
import "./Options.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options=({option,testResult})=>{

return(

    <div>
<div className="options my-6">
<button onClick={()=>testResult({option})}>
<button onClick={()=>testResult({option})}>

<p><input type="radio"/>{option}</p>
</button>
</button>
<ToastContainer />

</div>
    </div>
)


}
export default Options