import React from "react";
import "./Footer.css";
import {NavLink } from "react-router-dom";
const Footer=()=>{
    return(
        <div>
         <footer className="footer py-12 px-4 footer text-base-content flex lg:flex-row flex-col justify-between">
  <div className="flex flex-col justify-between">
    <span className="footer-title">Multiple Choice Quaere</span> 
    <a className="link link-hover">@Copyright by Mohammad Ibrahim,December,2022</a> 
    
  </div> 
 
  <div  className="flex flex-col justify-start">
   
    <NavLink to="/Statistics">Statistics</NavLink>
    <NavLink to="/blog">Blog</NavLink>

  </div> 
  <div >
    
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 py-2 px-3 rounded-md" /> 
        <button className="btn btn-primary absolute top-12 left-0 rounded-l-none px-3 py-2 font-bold bg-white text-blue-900">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}
export default Footer