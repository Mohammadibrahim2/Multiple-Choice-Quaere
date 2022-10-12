import React, { useState } from "react";
import"./Header.css"
import {NavLink } from "react-router-dom";
import { Bars3Icon, FolderMinusIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header =()=>{
   const[open,setOpen]=useState(false)

return(
   <div className="Navigation w-full">
      
      
      <div>
      
       <h2 className="text-2xl w-full">Multiple Choice Quaere </h2>
      </div>

 <nav className={`w-full md:w-1/2 md:static absolute duration-500 ease-in-out flex-col flex md:flex-row justify-end md:bg-none
 bg-gradient-to-r from-cyan-500 to-blue-500 z-30 ${open ? 'left-0 top-0':' left-0 top-[-120px]'}`}>
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/Statistics">Statistics</NavLink>
    <NavLink to="/blog">Blog</NavLink>
 </nav>
 <div onClick={()=>setOpen(!open)} className="h-6 w-6 z-40 md:hidden">
      {
      open ? <XMarkIcon />:<Bars3Icon />
      }
      </div>
 
   



 </div>
)

}
export default Header;