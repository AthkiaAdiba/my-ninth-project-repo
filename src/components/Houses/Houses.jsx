import { useEffect, useState } from "react";
import House from "../House/House";

const Houses = () => {
    const [houses, setHouses] = useState([]);
    console.log(houses)

    useEffect(() => {
        fetch('houses.json')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, []);

    return (
        <div className="mt-24 lg:mt-36 mb-28">
            <h2 className="font-roboto text-7xl text-center mb-10">Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-2 lg:mx-28">
                {
                    houses.map(house => <House key={house.id} house={house}></House>)
                }
            </div>
        </div>
    );
};

export default Houses;