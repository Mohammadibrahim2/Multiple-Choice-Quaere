import React from "react"; 
import { Link, useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import img from"../images/web-design.jpg"
import "./Home.css"

const Home=()=>{
    const topicsData=useLoaderData();
    const Topics=topicsData.data

    return(

<div>
    <div className="Heading">
        <div className="Heading-info">
        <h1>MCQ Test</h1>
        <p className="md:w-full w-1/2 my-2 md:text-start ">Keep practicing and stay on top for competitive exams</p>
        <Link to="/blog"><button className="Heading-btn">Lets go</button></Link>

        </div>
       
   
   
    </div>
    <div className="Topics">
    {
    Topics.map(topic=> <Topic key={topic.id} topic={topic}></Topic>)
    }
    </div>
  

</div>

    )



}
export default Home