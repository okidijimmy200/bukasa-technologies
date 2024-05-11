import React from 'react';

const Services = () => {
  return (
    <div className="service-container container mx-auto p-[3rem]" id="services">
      <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: IP PBX Proposal Solution */}
        <div className="bg-white hover:bg-[#008000] rounded-lg shadow-md p-6 md:flex md:flex-col">
          <h3 className="text-lg font-semibold mb-2">IP PBX Proposal Solution</h3>
          <ul className="list-disc pl-5">
            <li>IP PBX Overview</li>
            <li>Remote Working</li>
            <li>Advanced Calling Features</li>
          </ul>
        </div>

        {/* Card 2: Proposal for Fibre Optic Tower Blocks */}
        <div className=" bg-[#008000] text-white  rounded-lg shadow-md shadow-gray-500 p-6 md:flex md:flex-col">
          <h3 className="text-lg font-semibold mb-2">Proposal for Fibre Optic Tower Blocks</h3>
          <ul className="list-disc pl-5">
            <li>Assessment and Planning</li>
            <li>Solution Design</li>
            <li>Infrastructure Setup</li>
            <li>Termination Points</li>
            <li>Equipment and Hardware</li>
            <li>Testing and Certificates</li>
            <li>Maintenance and Support</li>
            <li>Future Proof Solution</li>
          </ul>
        </div>

        {/* Card 3: Digitalization Awareness */}
        <div className="bg-white hover:bg-[#008000] rounded-lg shadow-md p-6 md:flex md:flex-col">
          <h3 className="text-lg font-semibold mb-2">Digitalization Awareness</h3>
          <ul className="list-disc pl-5">
            <li>Specific Solution</li>
            <li>Benefits of the Intervention</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
