import React from 'react';
import Frame from "../../assets/Frame.png"
const GetStarted = () => {
  return (
    <div className="bg-blue-600 rounded-lg p-8 text-white text-center mb-6">
      <h2 className="text-2xl font-bold mb-4">
        Get Started with KoinX<br />for FREE
      </h2>
      
      <p className="mb-6">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>

      <img 
        src={Frame} 
        alt="Get Started Illustration"
        className="w-48 mx-auto mb-6"
      />

      <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
        Get Started for FREE →
      </button>
    </div>
  );
};

export default GetStarted; 