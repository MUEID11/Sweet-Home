import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import Estates from "../Pages/Estates";
import PrivateRoute from "./PrivateRoute";

import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/upadteprofile',
                    element: <PrivateRoute><UpdateProfile/></PrivateRoute>
                },
                {
                    path: '/Profile',
                    element: <PrivateRoute><Profile/></PrivateRoute>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path:'/about',
                    element: <About/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/signup',
                    element: <Register/>
                },
                {
                    path: '/details/:id',
                    element: <PrivateRoute> <Details/></PrivateRoute>
                },
                {
                    path: '/estates',
                    element: <Estates/>
                }
            ]
        }
    ]
)

export default router;