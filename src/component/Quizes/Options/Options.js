import React from "react";
import "./Options.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Options=({option,testResult,notify})=>{

return(

    <div>
<div className="options my-6">

<button onClick={()=>testResult({option})}>
<button onClick={notify}>

<p><input type="checkbox"/>{option}</p>
</button>
</button>
<ToastContainer />

</div>
    </div>
)


}
export default Options