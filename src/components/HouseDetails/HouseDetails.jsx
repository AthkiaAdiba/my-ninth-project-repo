import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const HouseDetails = () => {
    const houses = useLoaderData();
    // console.log(houses)
    const { id } = useParams();
    const idInt = parseInt(id);
    const house = houses.find(house => house.id_ === idInt);
    const { image, estate_title, location, facilities, status, segment_name, price, description, area } = house;
    console.log(house)
    return (
        <div className="mt-20 lg:mt-36 mx-2 lg:mx-72 mb-14">
            <div className="space-y-3 lg:space-y-0 mb-2 lg:mb-5 p-2 md:p-5 lg:p-6 flex flex-col lg:flex-row justify-between gap-0 lg:gap-6 font-roboto">
                <div className="space-y-4">
                    <div className="flex gap-3 lg:gap-5 items-center">
                        <p className="text-2xl lg:text-3xl text-gray-900 font-bold">{estate_title}</p>
                        <p className="bg-gray-800 px-2 py-1 text-white">{status}</p>
                    </div>
                    <p className="text-2xl text-gray-700 font-semibold">{segment_name}</p>
                    <p className="flex gap-3 items-center text-lg font-medium text-gray-700"><FaLocationDot></FaLocationDot>{location}</p>
                    <div className="grid grid-cols-2 gap-y-2 text-gray-600 text-lg font-medium">
                        {
                            facilities.map((facility, idx) => <p key={idx}>{facility}</p>)
                        }
                    </div>
                </div>
                <div className="space-x-2 lg:space-y-4">
                    <p className="text-2xl lg:text-3xl text-gray-900 font-bold">{price}</p>
                    <p className="text-xl lg:text-2xl text-gray-700 font-semibold">{area}</p>
                </div>
            </div>
            <div className="p-4 lg:p-8 card bg-base-100 rounded-none shadow-xl mx-auto font-roboto">
                <p className="text-4xl font-bold mb-7 text-gray-900 underline">Gallery</p>
                <figure><img className="w-full h-[350px] lg:h-[500px]" src={image} alt="Shoes" /></figure>
            </div>
            <div className="mt-10 p-4 lg:p-8 card bg-base-100 rounded-none shadow-xl mx-auto font-roboto">
                <p className="text-4xl font-bold mb-7 text-gray-900 underline">Description</p>
                <p className="text-lg font-roboto font-medium leading-8 text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default HouseDetails;