import React from 'react';
import ComputerNetworking from '../assets/Computer networking.png';
import OnlineTraining from '../assets/Online training.png';
import ITConsultancy from '../assets/IT consultancy.png';
import RemoteWorking from '../assets/Remote working.png';


export default function Objectives() {
  return (
    <>
      <section className='relative'>
        <div className="objective-sizing inset-0 flex items-center justify-center bg-[#008000] px-5 py-[3rem] w-[90%] m-auto mt-[-5rem]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center">
              {/* Customer */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4"> {/* Adjusted width for 4 items */}
                <div className="flex items-center">
                  <div className="h-12 w-12 text-sky-50">
                    <img src={ComputerNetworking} alt='Computer Networking' />
                  </div>
                  <h3 className="text-lg font-semibold text-sky-50">Computer Networking</h3>
                </div>
              </div>

              {/* Creative */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4"> {/* Adjusted width for 4 items */}
                <div className="flex items-center">
                  <div className="h-12 w-12 text-sky-50">
                    <img src={OnlineTraining} alt='Online Training' />
                  </div>
                  <h3 className="text-lg font-semibold text-sky-50">Online & Onsite training</h3>
                </div>
              </div>

              {/* Content */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4"> {/* Adjusted width for 4 items */}
                <div className="flex items-center">
                  <div className="h-12 w-12 text-sky-50">
                    <img src={RemoteWorking} alt='Remote Working' />
                  </div>
                  <h3 className="text-lg font-semibold text-sky-50">Remote Working</h3>
                </div>
              </div>

              {/* Teachers */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4"> {/* Adjusted width for 4 items */}
                <div className="flex items-center">
                  <div className="h-12 w-12 text-sky-50">
                    <img src={ITConsultancy} alt='Teachers' />
                  </div>
                  <h3 className="text-lg font-semibold text-sky-50">IT Consultancy</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
