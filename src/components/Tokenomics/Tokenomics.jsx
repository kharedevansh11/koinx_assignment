import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Tokenomics = () => {
  const data = {
    labels: ['Crowdsale investors: 80%', 'Foundation: 20%'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: [
          '#0082FF',
          '#FFA500',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Initial Distribution</h3>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48">
            <Pie data={data} options={options} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0082FF]"></div>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FFA500]"></div>
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-gray-600">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel 
          consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend 
          lectus eu fusce adipiscing.
        </p>
        <p>
          Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. 
          Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur 
          sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics; 