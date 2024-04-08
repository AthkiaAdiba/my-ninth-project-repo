import { FaLocationDot } from "react-icons/fa6";

const House = ({ house }) => {
    const { image, estate_title, location, facilities } = house;
    return (
        <div>
            <div className="h-[520px] card bg-base-100 font-roboto shadow-xl">
                <figure><img className="w-full h-[300px]" src={image} alt="Shoes" /></figure>
                <div className="space-y-3 card-body">
                    <h2 className="card-title text-gray-800">{estate_title}</h2>
                    <p className="flex gap-3 items-center text-lg text-gray-500"><FaLocationDot></FaLocationDot>{location}</p>
                    <div className="grid grid-cols-2 gap-x-24 gap-y-3 text-gray-500 text-base">
                        {
                            facilities.map(facility => <p>{facility}</p>)
                        }
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-gray-600 text-white">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default House;