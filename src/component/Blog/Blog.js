import React from "react";
import "./Blog.css";
const Blog=()=>{

    return(

<div className="Blog">

<div>
    <h1 className="text-2xl mb-6">1. What is the Purpose of React Router?</h1>
    <p>Routing is a process in which a user is directed to different pages based on their action or request.
     ReactJS Router is mainly used for developing Single Page Web Applications. 
     React Router is used to define multiple routes in the application. 
     When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file,
    the user will be redirected to that particular route.</p>

<p>React Router is a standard library system built on top of the React and used to
     create routing in the React application using React Router Package. It provides the
      synchronous URL on the browser with data that will be displayed on the web page.
       It maintains the standard structure and behavior of the application and mainly used for developing 
       single page web applications.</p>

    </div>
    <div className="my-6">

    <h1 className="text-2xl my-4">2. How does Context API Work?</h1>
    <p>React.createContext() is all you need. It returns a consumer and a provider. 
        Provider is a component that as it's names suggests provides the state to its children. 
        It will hold the "store" and be the parent of all the components that might need that store.
         Consumer as it so happens is a component that consumes and uses the state.
         More information can be found on React's documentation page</p>

    </div>
    <div className="my-6">
<h1 className="text-2xl my-4">3. What is useRef hook and how does it work?</h1>
<p>The useRef Hook allows you to persist values between renders.it can be used to store a mutable
    value that does not cause a re-rander when updated.It can be used to access a DOM element directly</p>
    <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument(initialValue)
        useRef() creates a plain javascript object the only difference between  useRef() and creating a (current:..)
         object yourself is that useRef will give you same ref object on every render.

</p>

    </div>

</div>

    )



}
export default Blog;