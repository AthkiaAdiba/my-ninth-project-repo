import { Helmet } from "react-helmet-async";
import Houses from "../../components/Houses/Houses";
import Slider from "../../components/Slider/Slider";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <Houses></Houses>
        </div>
    );
};

export default Home;