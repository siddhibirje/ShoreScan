import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const erosionData = [
  { year: "2017", erosion: 0 },
  { year: "2018", erosion: 1.2 },
  { year: "2019", erosion: 2.8 },
  { year: "2020", erosion: 4.5 },
  { year: "2021", erosion: 4.8 },
  { year: "2022", erosion: 5.9 },
  { year: "2023", erosion: 6.7 },
  { year: "2024", erosion: 7.3 },
  { year: "2025", erosion: 8.2 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <p className="font-semibold text-gray-800">{`Year: ${label}`}</p>
        <p className="text-teal-600">
          <span className="font-medium">Erosion: </span>
          <span>{`${payload[0].value} meters`}</span>
        </p>
      </div>
    );
  }
  return null;
};

const ErosionGraph = () => {
  // Calculate the average annual increase
  const firstYear = erosionData[0].erosion;
  const lastYear = erosionData[erosionData.length - 1].erosion;
  const years = erosionData.length - 1;
  const avgAnnualIncrease = ((lastYear - firstYear) / years).toFixed(2);
  
  // Calculate total erosion
  const totalErosion = lastYear - firstYear;
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl shadow-xl p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Shoreline Erosion Analysis</h2>
        <p className="text-gray-600 text-center mt-2">Measuring coastal changes from 2017 to 2025</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">Total Erosion</p>
            <p className="text-3xl font-bold text-blue-700">{totalErosion}m</p>
          </div>
          <div className="bg-teal-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">Average Annual</p>
            <p className="text-3xl font-bold text-teal-700">{avgAnnualIncrease}m</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">Latest Reading</p>
            <p className="text-3xl font-bold text-indigo-700">{lastYear}m</p>
          </div>
        </div>
        
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={erosionData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="erosionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#9CA3AF' }}
              />
              <YAxis 
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#9CA3AF' }}
                label={{ value: 'Erosion (meters)', angle: -90, position: 'insideLeft', offset: -5, fill: '#6B7280', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="erosion" 
                stroke="#0EA5E9" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#erosionGradient)" 
                activeDot={{ r: 8, fill: '#0369A1', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis Insights</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <div className="min-w-4 h-4 w-4 rounded-full bg-blue-500 mt-1 mr-2"></div>
            <p>Shoreline erosion has increased by <span className="font-medium">{totalErosion} meters</span> over the 9-year period.</p>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 w-4 rounded-full bg-teal-500 mt-1 mr-2"></div>
            <p>The average annual increase rate is <span className="font-medium">{avgAnnualIncrease} meters</span>, indicating a steady progression.</p>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 w-4 rounded-full bg-indigo-500 mt-1 mr-2"></div>
            <p>The most significant erosion occurred between 2019-2020, with a <span className="font-medium">{(erosionData[3].erosion - erosionData[2].erosion).toFixed(1)} meter</span> increase.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErosionGraph;