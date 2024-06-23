import { createBrowserRouter } from "react-router-dom"
import Home from "../../components/page/Home"
import Main from "../../Layout/Main"
import LogIn from "../../Authentication/LogIn"
import AddPost from "../../components/page/Dashboard/AddPost"
import Rooms from "../../components/Rooms/Rooms"


const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
       
        children: [
  
          {
            path: '/',
            element: <Home />
  
          }, 
          {
            path: '/login',
            element: <LogIn></LogIn>
  
          }, 
          {
            path: '/addpost',
            element: <AddPost/>
  
          }, 
          {
            path: '/rooms',
            element: <Rooms/>
  
          }, 
        ]
      },
     
    ]
    )
    export default router