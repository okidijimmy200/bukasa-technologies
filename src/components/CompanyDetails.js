import React from 'react';
import CompanyImage from '../assets/bg-5.jpg'

const CompanyDetails = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row border-4 border-inherit mt-[5rem]">
      {/* Left Section */}
      <div className="md:w-1/2 border-r border-gray-300">
        <div className="p-4 mt-[4rem]">
          <h2 className="text-2xl font-bold mb-2">Bukasa Technologies</h2>
          <p className="text-gray-700 mb-4">
          Bukasa Technologies Ltd, a private technical company established in 2004, 
          officially began operations in 2005, specializing in various field works. 
          Located strategically at Ntinda plot 19 off martyr’s way Kampala, Uganda, the company boasts a team of skilled technical graduates, diploma holders, and other qualified staff.
          </p>
          <p className="text-gray-700 mb-4">
          Equipped to provide top-notch services, Bukasa Telecom International aims to serve clients in Uganda and beyond. 
          The company has been actively engaged in projects such as Radio path profiling, Feasibility studies, CDMA, RF, and BTS upgrades, Microwave Radio Links installation.
          </p>
          <p className="text-gray-700">
          Additionally, Bukasa Telecom International conducts GSM base Stations commissioning and WCDMA RF & BTS installations. 
          Operating independently or as a subcontractor, it forms strong partnerships in engineering fields.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <img
          src={CompanyImage}
          alt="Company"
          className="company-img w-full h-[95vh] md:h-[95vh] object-cover"
        />
      </div>
    </div>
  );
};

export default CompanyDetails;
