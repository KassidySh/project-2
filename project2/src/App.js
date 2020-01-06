import React from 'react';

import './App.css';

function App() {
  fetch('https://www.superheroapi.com/api.php/3224575430950372/1')
      .then(response => response.json())
      .then(data => {
        console.log(data)
       
      }
      )
      .catch(err => {
        console.error({err})
      })
  

  return (
    <div className="App">
      <h1>Header is working</h1>
      <h2> Error is gone</h2>
    </div>
  );
}

export default App;
