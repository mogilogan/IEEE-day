import React, { useState,useEffect } from 'react'

const Table = () => {
    

    const [tableData, setTableData] = useState([
        { id: 1, name: 'Photography contest', date: '26.07.23-10.08.23'},
        { id: 2, name: 'Panel discussion', date: '21-08-23(tentative)' },
        { id: 3, name: 'Technical Connexion', date: '29.08.23' },
        { id: 4, name: 'Coding Competition', date: '18.08.23' },
        { id: 5, name: 'Treasure Hunt', date: '23.08.23' },
        { id: 6, name: '3D Design', date: '26.08.23(tentative)' },
        { id: 7, name: 'Delicate Design', date: '28.08.23' },
        { id: 8, name: 'Short Film', date: '26.07.23- 10.08.23' },
        // Add more rows here...
      ]);
      const [tableVisible, setTableVisible] = useState(false);
    
      useEffect(() => {
        // Set a timeout to gradually reveal the table after the component mounts
        const tableTimeout = 500; // Adjust the timing as needed
    
        setTimeout(() => {
          setTableVisible(true);
        }, tableTimeout);
      }, []);


    return (
        <div className="my-8 mx-auto max-w-md">
        <table
        
          className={`shadow-light-innerr-neumorphism-xl rounded-2xl table-auto w-full ${
            tableVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">EVENT</th>
              <th className="px-4 py-2">DATE</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(row => (
              <tr
                key={row.id}
                style={{opacity: tableVisible ? 1 : 0, overflow: "hidden",transition: "opacity 2s",}}
                
              >
                <td className=" px-4 py-2">{row.id}</td>
                <td className=" px-4 py-2">{row.name}</td>
                <td className=" px-4 py-2">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add other content here that should move down */}
      </div>
    );
  };

export default Table