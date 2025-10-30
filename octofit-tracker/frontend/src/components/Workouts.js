import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log('Fetching Workouts from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched Workouts:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-3 text-danger">Workouts</h2>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>User</th>
                <th>Workout</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{workout.user}</td>
                  <td>{workout.workout}</td>
                  <td>{workout.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
