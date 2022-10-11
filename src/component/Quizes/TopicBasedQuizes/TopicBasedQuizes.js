import React, { useState } from "react";
import Options from "../Options/Options";
import { EyeIcon,ArrowRightIcon} from '@heroicons/react/24/solid';
const TopicBasedQuizes=({quiz})=>{

    const {name,question,correctAnswer,options}=quiz

   const checkCorrect=()=>{
    alert(correctAnswer)
   }
    const testResult=(ans)=>{
        const rightAwnser=ans.option

console.log(rightAwnser)
console.log(correctAnswer)
if(rightAwnser===correctAnswer){
    alert("answer correct")
}
else{
    alert("answer is not correct")
}

    };


return(
    <div>

<div className="bg-fuchsia-100 my-2 py-3 px-9">
<div className="flex justify-between">
<h4 className="text-2xl my-3 flex align-baseline "><ArrowRightIcon  className="w-6 h-6"></ArrowRightIcon> {question}</h4>
<button onClick={checkCorrect}>
<EyeIcon className="w-5 h-5"></EyeIcon>
 </button>
</div>


{
options.map(option=><Options
 option={option}
 testResult={testResult}

 ></Options>)
}


</div>
    </div>
)





}
export default TopicBasedQuizes;