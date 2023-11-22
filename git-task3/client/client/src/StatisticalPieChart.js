import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
const StatisticalPieChart = () => {
  const MoviesData = [
    { count: 2163, label: 'Horror' },
    { count: 4655, label: 'Comedy' },
    { count: 3778, label: 'Action' },
  ];
  const SportsData = [
    { count: 58.6, label: ' AVG Mode cricket' },
    { count: 26, label: 'AVG Mode Football %' },
    { count: 26.14, label: 'AVG Mode Kabbadi' },
    ];
  const DiseaseData = [
    { count: 48.1491, label: 'AVG Effected%' },
    { count: 50.5518, label: 'AVG Alive%' },
    { count: 53.3627, label: 'AVG Deaths%' },
  ];
  const VehiclesData =[
    { count: 45.09, label: 'AVG Cars sold in a year' },
    { count: 34.64 , label: 'AVG bikes sold in a year' },
    { count: 21.13, label: 'AVG lorries sold in a year' },
  ]
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const chartStyle = {
    display: 'flex',
    marginRight: '50%', 
  };
  return (
    <div id="StatisticalPieChart">
    <div className='StatisticalPieChart' style={chartStyle}>
      <PieChart width={250} height={350}>
        <Pie data={MoviesData}dataKey="count"nameKey="label"cx="50%"cy="50%"outerRadius={80}fill="#8884d8"label>
          {MoviesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
      <PieChart width={250} height={350}>
        <Pie data={SportsData}dataKey="count"nameKey="label"cx="50%"cy="50%"outerRadius={80}fill="#8884d8"label>
          {SportsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
      <PieChart width={250} height={350}>
          <Pie data={DiseaseData}dataKey="count"nameKey="label"cx="50%"cy="50%"outerRadius={80}fill="#8884d8"label>
            {DiseaseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
        <PieChart width={250} height={350}>
        <Pie data={VehiclesData}dataKey="count"nameKey="label"cx="50%"cy="50%"outerRadius={80}fill="#8884d8"label>
          {VehiclesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
    </div>
  );
};
export default StatisticalPieChart;

