import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    fetch('/api/ping')
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setApiResponse(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Response:</h1>
        <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
