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
      <div className="glass-card p-4 rounded-lg">
        <p className="font-semibold text-white">{`Year: ${label}`}</p>
        <p className="text-teal-200">
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
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-teal-700 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-8 rounded-2xl mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
            Shoreline Erosion Analysis
          </h1>
          <p className="text-xl text-white/90 text-center">
            Measuring coastal changes from 2017 to 2025
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="glass-card p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Total Erosion</h3>
              <p className="text-3xl font-bold text-blue-400">{totalErosion}m</p>
            </div>
            <div className="glass-card p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Average Annual</h3>
              <p className="text-3xl font-bold text-teal-400">{avgAnnualIncrease}m</p>
            </div>
            <div className="glass-card p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Latest Reading</h3>
              <p className="text-3xl font-bold text-blue-400">{lastYear}m</p>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={erosionData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="erosionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#22D3EE" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: '#fff' }}
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                  />
                  <YAxis 
                    tick={{ fill: '#fff' }}
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
                    label={{ value: 'Erosion (meters)', angle: -90, position: 'insideLeft', offset: -5, fill: '#fff' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="erosion" 
                    stroke="#22D3EE" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#erosionGradient)" 
                    activeDot={{ r: 8, fill: '#06B6D4', stroke: '#fff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-2xl font-semibold text-white mb-4">Analysis Insights</h3>
          <ul className="space-y-4 text-white/90">
            <li className="flex items-start">
              <div className="min-w-4 h-4 w-4 rounded-full bg-blue-400 mt-1 mr-3"></div>
              <p>Shoreline erosion has increased by <span className="font-medium text-blue-300">{totalErosion} meters</span> over the 9-year period.</p>
            </li>
            <li className="flex items-start">
              <div className="min-w-4 h-4 w-4 rounded-full bg-teal-400 mt-1 mr-3"></div>
              <p>The average annual increase rate is <span className="font-medium text-teal-300">{avgAnnualIncrease} meters</span>, indicating a steady progression.</p>
            </li>
            <li className="flex items-start">
              <div className="min-w-4 h-4 w-4 rounded-full bg-cyan-400 mt-1 mr-3"></div>
              <p>The most significant erosion occurred between 2019-2020, with a <span className="font-medium text-cyan-300">{(erosionData[3].erosion - erosionData[2].erosion).toFixed(1)} meter</span> increase.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErosionGraph;