import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { login, user } = useContext(AuthContext);
    console.log(user.reloadUserInfo.passwordHash);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;

        // login user
        login(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('You have logged in successfully');
                reset();
            })
            .catch(error => {
                console.error(error);

            })
    }

    return (
        <div className="mt-36 mb-20">
            <div className="w-full font-roboto mx-auto max-w-md p-8 space-y-3 rounded-none bg-gray-100 text-gray-100 shadow-2xl">
                <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-1 text-lg">
                        <label className="block text-gray-900 font-medium text-xl">Email Address</label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" {...register("email", {
                            validate: (value) => {
                                if (value == user.email) {
                                    return true;
                                }
                                return toast.error('Email does not match.');
                            }
                        })} />
                    </div>

                    <div className="space-y-1 text-lg">
                        <label className="block text-gray-900 font-medium text-xl">Password</label>
                        <input type="password" name="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-700">This field is required</span>}
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm bg-gray-900 text-white text-lg">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-gray-900 text-lg font-medium">Or Login With</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="space-y-5">
                    <div>
                        <button className="text-black text-lg flex items-center justify-center w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 border-2">
                            <FaGoogle></FaGoogle>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div>
                        <button className="text-black text-lg flex items-center justify-center w-full p-4 space-x-4 border-2 rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:dark:ring-violet-600">
                            <FaGithub></FaGithub>
                            <p>Login with GitHub</p>
                        </button>
                    </div>
                </div>
                <p className="text-lg font-normal text-center sm:px-6 text-black">Do not have an account?
                    <Link to='/register' className="underline ml-2 font-semibold">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;