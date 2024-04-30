import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-[5rem]" id="about">
      <h2 className="text-3xl text-center font-bold mb-6">Work with Us</h2>

      <div className="flex flex-col md:flex-row">
        {/* First Div */}
        <div className="md:w-1/3 p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Engineering Installations Services</h3>
          <p className="text-gray-700 text-justify">
          Bukasa Technologies provides essential engineering services for project implementation, 
          including tower construction, base station installation, microwave radio link installation, 
          and consultancy for telecom companies, among others.
          </p>
        </div>

        {/* Second Div */}
        <div className="md:w-1/3 border-l border-r border-[#008000] p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Installation & Commissioning</h3>
          <p className="text-gray-700 text-justify">
          Bukasa Technologies, though new, boasts a team with vast telecom experience, 
          specializing in installation and commissioning. Staff expertise includes Microwave Radio, 
          GSM, CDMA, WCDMA Base stations, power systems, and switches.
          </p>
        </div>

        {/* Third Div */}
        <div className="md:w-1/3 p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Training</h3>
          <p className="text-gray-700 text-justify">
          Bukasa Technologies ensures staff stay updated with rapid communication tech growth through refresher courses by main contractors. 
          Non-technical staff also receive training, recommended to have basic technical knowledge for collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
