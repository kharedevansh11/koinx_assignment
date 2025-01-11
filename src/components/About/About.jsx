import React from 'react';
import about1 from '../../assets/AboutHolding1.png'
import about2 from '../../assets/AboutHolding2.png'

const About = ({ coinId, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">About {coinId}</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">What is Bitcoin?</h3>
          <p className="text-gray-600 leading-relaxed">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 
            24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time 
            low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet</h3>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus 
              urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque 
              fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. 
              Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. 
              Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus 
              enim dui. Turpis tristique placerat interdum sed volutpat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing 
              semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames 
              amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-bold mb-6">Already Holding Bitcoin?</h3>
          {/* <div className="grid md:grid-cols-2 gap-4"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-6 text-white">
              <div className="flex items-center gap-4">
                <img src={about1} alt="Calculator" className="w-15 h-15" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Calculate your Profits</h4>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
                    Check Now →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-6 text-white">
              <div className="flex items-center gap-4">
                <img src={about2} alt="Tax Calculator" className="w-15 h-15" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Calculate your tax liability</h4>
                  <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium">
                    Check Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 