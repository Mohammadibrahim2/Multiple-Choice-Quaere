import React from "react";
import "./Quizes.css"
import { useLoaderData } from "react-router-dom";
import TopicBasedQuizes from "./TopicBasedQuizes/TopicBasedQuizes";

const Quizes=()=>{
 const quizes=useLoaderData()
 const quizesData=quizes.data.questions;
 const topicName=quizes.data.name


return(
    <div  className="topicsDetails">

<div className="px-8">
<h1 className="text-center text-3xl">The Topic of {topicName}</h1>
    {
    quizesData.map(quiz=><TopicBasedQuizes key={quiz.id} quiz={quiz}></TopicBasedQuizes>)
}

</div>

    </div>
)


}
export default Quizes;