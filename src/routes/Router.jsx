import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import HouseDetails from "../components/HouseDetails/HouseDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdatedProfile from "../pages/UpdatedProfile/UpdatedProfile";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><HouseDetails></HouseDetails></PrivateRoute>,
                loader: () => fetch('/houses.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updatedProfile',
                element: <PrivateRoute><UpdatedProfile></UpdatedProfile></PrivateRoute>
            }
        ]
    }
]);
export default router;