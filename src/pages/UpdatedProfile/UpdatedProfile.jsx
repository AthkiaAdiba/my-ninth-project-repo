import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const UpdatedProfile = () => {
    const { user, updateInformation } = useContext(AuthContext);
    // console.log(loggedUser.displayName)

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: user.displayName,
            email: user.email,
            image: user.photoURL

        }
    })

    const onSubmit = (data) => {
        // console.log(data)
        const { name, image } = data;

        // update profile
        updateInformation(user, name, image)
            .then(() => {
                console.log('profile updated')
            })
            .catch()
    }

    return (
        <div>
            <Helmet>
                <title>Updated Profile | DreamLoom Realty</title>
            </Helmet>
            <div className="mt-36 mb-20">
                <div className="w-full font-roboto mx-auto max-w-md p-8 space-y-3 rounded-none bg-gray-100 text-gray-100 shadow-2xl">
                    <h1 className="text-2xl font-bold text-center text-gray-900">Update Your Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1 text-lg">
                            <label className="block text-gray-900 font-medium text-xl">Full Name</label>
                            <input type="text" name="name" placeholder="Enter Your Full Name" className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" {...register("name")} />

                        </div>

                        <div className="space-y-1 text-lg">
                            <label className="block text-gray-900 font-medium text-xl">Email Address</label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" {...register("email")} disabled />

                        </div>

                        <div className="space-y-1 text-lg">
                            <label className="block text-gray-900 font-medium text-xl">Image URL</label>
                            <input type="text" name="image" placeholder="Enter Your Image URL" className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" {...register("image")} />
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm bg-gray-900 text-white text-lg">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedProfile;