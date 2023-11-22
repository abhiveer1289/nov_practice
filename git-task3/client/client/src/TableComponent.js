import React from 'react';
import './TableComponent.css'; // Import a separate CSS file for styling

const TableComponent = ({ data }) => {
  return (
    <div id="TableComponent">
    <table className="custom-table">
      <thead>
        <tr>
          <th></th>
          <th className="orange-heading">MOVIES DATASET</th>
          <th className="orange-heading">SPORTS DATASET</th>
          <th className="orange-heading">DISEASE DATASET</th>
          <th className="orange-heading">VEHICLES DATASET</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
             <td className="pink-value">ATTRIBUTE-{index + 1}</td>
             <td className="pink-value">{item.dataset1}</td>
             <td className="pink-value">{item.dataset2}</td>
             <td className="pink-value">{item.dataset3}</td>
             <td className="pink-value">{item.dataset4}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default TableComponent;


