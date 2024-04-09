import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import HouseDetails from "../components/HouseDetails/HouseDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/houseDetails/:id',
                element: <HouseDetails></HouseDetails>,
                loader: () => fetch('/houses.json')
            }
        ]
    }
]);
export default router;