import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import HouseDetails from "../components/HouseDetails/HouseDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdatedProfile from "../pages/UpdatedProfile/UpdatedProfile";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Agents from "../pages/Agents/Agents";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
            },
            {
                path: '/agents',
                element: <Agents></Agents>
            }
            
        ]
    }
]);
export default router;