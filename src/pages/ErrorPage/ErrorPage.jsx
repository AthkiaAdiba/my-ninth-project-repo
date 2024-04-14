import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center items-center mt-48 lg:mt-40">
            <p className="text-7xl font-bold text-gray-900 mb-5">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/'><button className="btn bg-gray-700 text-white">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;