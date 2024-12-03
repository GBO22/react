import React, { useEffect, useState } from 'react';
import { getPatients } from './api/patientService';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Patient List</h1>
        <table>
          <thead>
            <tr>
              <th>Family Name</th>
              <th>Given Name</th>
              <th>Sex</th>
              <th>Birth Date</th>
              <th>Number of Parameters</th>
              <th>Alarm</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.ID}>
                <td>{patient.familyName}</td>
                <td>{patient.givenName}</td>
                <td>{patient.sex}</td>
                <td>{new Date(patient.birthDate).toLocaleDateString()}</td>
                <td>{patient.parameters.length}</td>
                <td>
                  {patient.parameters.some(param => param.Alarm) ? (
                    <span style={{ color: 'red' }}>Alarm</span>
                  ) : (
                    'No Alarm'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;