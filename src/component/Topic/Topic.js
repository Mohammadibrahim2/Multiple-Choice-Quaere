import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";
import { ArrowRightIcon} from '@heroicons/react/24/solid';

const Topic=({topic})=>{
 const{id,name,logo,total}=topic
 

return(

    <div >

      <div className="topics">
        <img src={logo}></img>
        <div className="Topics-details">
            <h2>{name}</h2>
            <h3 className="my-2">Quize:{total}</h3>
            <Link to={`/home/${id}`}>
              <button className="button flex justify-arround align-baseline"><span className="me-2">{name}</span>
              <ArrowRightIcon  className="w-6 h-5 "></ArrowRightIcon> </button></Link>
           

        </div>

      </div>

       

   
    </div>
)


}
export default Topic