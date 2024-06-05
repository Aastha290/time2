import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Routine() {
  const [routine, setRoutine] = useState([]);

  useEffect(() => {
    axios.get('/api/routine')
      .then(response => {
        setRoutine(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the routine!", error);
      });
  }, []);

  return (
    <div>
      <h1>Routine</h1>
      <ul>
        {routine.map(entry => (
          <li key={entry.id}>
            User ID: {entry.user_id}, Routine Entry ID: {entry.routine_entry_id}, Duration: {entry.duration}, Date: {entry.entry_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Routine;
