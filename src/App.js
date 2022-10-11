
import {createBrowserRouter,RouterProvider,loader} from "react-router-dom";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Stat from "./component/Statistics/stat";
import EmptyPage from "./component/EmptyPage/EmptyPage";
import Main from './layout/Main';
import Quizes from "./component/Quizes/Quizes";

function App() {
  const router=createBrowserRouter([


    {path:"/",element:<Main></Main>,children:
    [

    {path:"/",
    loader:async()=>{
      return fetch("https://openapi.programming-hero.com/api/quiz")
    },
    element:<Home></Home>},
    {
      path:"home/:quizesId",
      loader:async({params})=>{
        console.log(params.quizesId)
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizesId}`)
      },
      element:<Quizes></Quizes>

    },
    {path:"/Statistics",
    loader:async()=>{
      return fetch("https://openapi.programming-hero.com/api/quiz")
    },
    element:<Stat></Stat>},
    {path:"/blog",element:<Blog></Blog>}
  
  ]},
  {
    path:"*",element:<EmptyPage></EmptyPage>
  }


  ]);
  return (
    <div className="App">
    
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App; 