import React from "react";
import "./Options.css";


const Options=({option,testResult})=>{

return(

    <div>
<div className="options my-6">
    
<button onClick={()=>testResult({option})}>

<p><input type="checkbox"/>{option}</p>
</button>

</div>
    </div>
)


}
export default Options