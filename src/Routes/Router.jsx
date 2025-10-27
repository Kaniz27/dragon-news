import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Layouts/Components/HomeLayout/Page/Home";
import CategoryNews from "../Layouts/Components/HomeLayout/Page/CategoryNews";
import Login from "../Layouts/Components/HomeLayout/Page/Login";
import Register from "../Layouts/Components/HomeLayout/Page/Register";
import AuthLayout from "../Layouts/Components/HomeLayout/Page/AuthLayout";
const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:'',
                    element:<Home></Home>,
                },
                {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader:()=>fetch('/news.json'),
                }
            ]
            
        },{
            path:'/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/login',
                    element:<Login></Login>,
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>,
                },
            ]
        },
        {
            path:'/news',
            element:<h1>news layout</h1>
        },
        {
            path:'/*',
            element:<h1>Error 404 layout</h1>
        }
    ]
);export default router