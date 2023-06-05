import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabla from './tables.js';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ejercicio 1</h1>
        <Tabla />
      </div>
    );
  }
}

export default App;
