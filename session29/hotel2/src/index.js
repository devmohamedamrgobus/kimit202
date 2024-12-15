import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Blogs from './pages/Blogs';
import './assets/task10';
import './assets/task10.css'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
    path:'/',
    element:<App />,
    children:[
        {
            path:"home",
            element:<Home />
        },
        {
            path:"about",
            element:<About />
        },
        {
            path:"blogs",
            element:<Blogs />
        },
        {
            path:"rooms",
            element:<Rooms />
        }
    ]
}])
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
