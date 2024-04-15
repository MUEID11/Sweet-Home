import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/upadteprofile',
                    element: <UpdateProfile/>
                },
                {
                    path: '/Profile',
                    element: <Profile/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path:'/about',
                    element: <About/>
                }
            ]
        }
    ]
)

export default router;