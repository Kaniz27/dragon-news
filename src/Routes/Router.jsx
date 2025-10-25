import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Layouts/Components/HomeLayout/Page/Home";
import CategoryNews from "../Layouts/Components/HomeLayout/Page/CategoryNews";
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
            element:<h2>Authentication layout</h2>
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