import React, { useState, useEffect } from 'react';
import api from '../services/api';

function RoutineEntries() {
  const [routineEntries, setRoutineEntries] = useState([]);

  useEffect(() => {
    api.get('/routine-entries')
      .then(response => {
        setRoutineEntries(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the routine entries!", error);
      });
  }, []);

  return (
    <div>
      <h1>Routine Entries</h1>
      <ul>
        {routineEntries.map(entry => (
          <li key={entry.id}>{entry.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoutineEntries;
