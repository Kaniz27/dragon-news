import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<HomeLayout></HomeLayout>
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