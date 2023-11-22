import React from 'react';
import TableComponent from './TableComponent';
const MyDataTable = () => {
    const sampleData = [
        { dataset1: 'Storytelling', dataset2: 'Physical Fitness', dataset3: 'Pathology', dataset4: 'Performance' },
        { dataset1: 'Cinematography', dataset2: 'Teamwork', dataset3: 'Symptoms', dataset4: 'Safety' },
        { dataset1: 'Acting', dataset2: 'Skill Development', dataset3: 'Etiology', dataset4: 'Fuel Efficiency' },
        { dataset1: 'Sound and Music', dataset2: 'Competition', dataset3: 'Diagnosis', dataset4: 'Design and Style' },
        { dataset1: 'Editing', dataset2: 'Sportsmanship', dataset3: 'Treatment', dataset4: 'Technology and Connectivity' },
        ];
return (
    <div className="table-container">
      <h2 className="table-heading">Data Table</h2>
      <TableComponent className="data1" data={sampleData} />
    </div>
  );
};

export default MyDataTable;
