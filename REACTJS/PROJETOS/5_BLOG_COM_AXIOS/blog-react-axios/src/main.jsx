import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

//paginas
import Home from './routes/Home/Home.jsx';
import NewPost from './routes/NewPost/NewPost.jsx';
import Post from './routes/Post/Post.jsx';
import Admin from './routes/Admin/Admin.jsx';
import EditPost from './routes/EditPost/EditPost.jsx';

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPost/>,
      },
      {
        path:"/posts/:id",
        element: <Post/>,
      },
      {
        path:"/admin",
        element: <Admin/>,
      },
      {
        path:"/posts/edit/:id",
        element: <EditPost/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
