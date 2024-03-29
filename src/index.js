import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

import Home from "./components/Home";
import Products from './components/Products';
import TodoApp from './components/Todo-app';
import Layout from './components/Layout';
import Contact from './components/Contact';
//import SignupForm from './components/to_app_exp';



const router = createBrowserRouter(
  [{
    path:"/",
    element:<Layout/>,
    children:[

      {
        index:true,
  element:<Home/>,
 
},
{
  path:"/Products",
  element:<Products/>,
 
},
{
  path:"/Contact",
  element:<Contact/>,
 
},

{
  path:"/Todo-app",
  element:<TodoApp/>,
 

 },
// {
//   path:"/to_app_exp",
//   element:<SignupForm/>
// }
  ]
}])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

