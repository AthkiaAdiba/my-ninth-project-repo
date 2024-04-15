import PropTypes from 'prop-types';
import { FaGithub, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";

const Agent = ({ agent }) => {
    const { image, name, position, office_number, mobile_number, fax_number, email } = agent;
    return (
        <div data-aos="zoom-in" data-aos-duration="2000">
            <div className="flex flex-col justify-center p-10 bg-base-100 font-roboto shadow-md rounded-xl text-black border-2">
                <img src={image} alt="" className="w-36 h-36 mx-auto rounded-full bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl text-gray-800">{name}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-500">{position}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-gray-600 mt-5 space-y-3'>
                            <p className='flex justify-start'>Office</p>
                            <p>Mobile</p>
                            <p className='flex justify-start'>Fax</p>
                            <p className='flex justify-start'>Email</p>
                            <p className='flex justify-start'>Social</p>
                        </div>
                        <div className='mt-5 space-y-3 text-lg font-medium text-gray-700'>
                            <p className='text-gray-900 flex justify-start'>{office_number}</p>
                            <p className='text-gray-900 flex justify-start'>{mobile_number}</p>
                            <p className='text-gray-900 flex justify-start'>{fax_number}</p>
                            <p className='text-gray-900 flex justify-start'>{email}</p>
                            <div className='flex'>
                                <a className="mr-3 rounded-md text-gray-600 hover:text-violet-400">
                                    <FaGithub className='text-xl'></FaGithub>
                                </a>
                                <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="mr-3 rounded-md text-gray-600 hover:text-violet-400">
                                    <TbWorld className='text-xl'></TbWorld>
                                </a>
                                <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="mr-3 rounded-md text-gray-600 hover:text-violet-400">
                                    <FaTwitter className='text-xl'></FaTwitter>
                                </a>
                                <a rel="noopener noreferrer" href="#" aria-label="Email" className="mr-3 rounded-md text-gray-600 hover:text-violet-400">
                                    <MdOutlineMailOutline className='text-xl'></MdOutlineMailOutline>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Agent.propTypes = {
    agent: PropTypes.object
}

export default Agent;