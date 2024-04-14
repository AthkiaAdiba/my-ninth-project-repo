import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";



const House = ({ house }) => {
    const { id_, image, estate_title, location, facilities, status, segment_name, price } = house;
    return (
        <div className="flex">
            <Helmet>
                <title>Estate Details</title>
            </Helmet>
            <div className="relative card bg-base-100 font-roboto shadow-sm border-2">
                <figure><img className="w-full h-[300px] lg:h-[350px]" src={image} alt="Shoes" /></figure>
                <div className="space-y-3 card-body">
                    <h2 className="card-title text-gray-800">{estate_title}</h2>
                    <p className="flex gap-3 items-center text-lg text-gray-500"><FaLocationDot></FaLocationDot>{location}</p>
                    <div className="grid grid-cols-2 gap-x-24 gap-y-3 text-gray-500 text-base">
                        {
                            facilities.map((facility, idx) => <p key={idx}>{facility}</p>)
                        }
                    </div>
                    <Link to={`/houseDetails/${id_}`}><button className="btn bg-gray-700 text-white">View Property</button></Link>
                </div>
                <div className="absolute flex justify-between top-4 left-5 right-5">
                    <div className="bg-gray-400 px-2 py-1 text-white">
                        {segment_name}
                    </div>
                    <div>
                        <div className="bg-gray-600 px-2 py-1 text-white">
                            {status}
                        </div>
                    </div>
                </div>
                <p className="absolute top-60 lg:top-72 left-5 text-white text-2xl">{price}</p>
            </div>
        </div>
    );
};

House.propTypes = {
    house: PropTypes.object
}

export default House;