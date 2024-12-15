import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Github from './Github';
import Counter from './Counter';
import Products from './Products'
import Singleproduct from './Singleproduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"github",
        element:<Github />
      },
      {
        path:"counter",
        element:<Counter />
      },
      {
        path:"products",
        element:<Products />
      },
      {
        path:"singleproduct/:id",
        element:<Singleproduct />
      }
    ]
  }
]);
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
