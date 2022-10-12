import React, { useState } from "react";
import Options from "../Options/Options";
import { EyeIcon,ArrowRightIcon} from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopicBasedQuizes=({quiz})=>{

  const {name,question,correctAnswer,options}=quiz;
   

  
  const[matchingResult,setMatchResult]=useState();
  console.log(matchingResult)

   const testResult=(ans)=>{
  const rightAwnser=ans.option
if(rightAwnser===correctAnswer){
  setMatchResult("The answer is correct.")
}
else{
  setMatchResult("The answer is wrong.")
}
};

    const notify = () => toast(correctAnswer);

return(
    <div>

<div className="bg-fuchsia-100 my-2 py-3 px-9">
<div className="flex justify-between">
<h4 className="text-2xl my-3 flex align-baseline "><ArrowRightIcon  className="w-6 h-6"></ArrowRightIcon> {question}</h4>

<button onClick={notify}>
        
<EyeIcon className="w-5 h-5"></EyeIcon>
</button>
<ToastContainer />

</div>


{
options.map(option=><Options
 option={option}
 testResult={testResult}

 matchingResult={matchingResult}


 ></Options>)
}


</div>
    </div>
)





}
export default TopicBasedQuizes;