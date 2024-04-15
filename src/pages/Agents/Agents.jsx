import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Agent from "../../components/Agent/Agent";

const Agents = () => {
    const [agents, setAgents] = useState([]);
    console.log(agents)

    useEffect(() => {
        fetch('agents.json')
            .then(res => res.json())
            .then(data => setAgents(data))
    }, [])

    return (
        <div className="mt-24 lg:mt-36 mb-28">
            <Helmet>
                <title>Agents | DreamLoom Realty</title>
            </Helmet>
            <h2 data-aos="fade-down" data-aos-duration="2000" className="font-roboto text-7xl text-center mb-10">Agents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-2 lg:mx-28">
                {
                    agents.map(agent => <Agent key={agent.id} agent={agent}></Agent>)
                }
            </div>
        </div>
    );
};

export default Agents;