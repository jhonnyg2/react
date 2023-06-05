import React from 'react';

class Tabla extends React.Component {
  render() {
    const filas = [];
    for (let i = 1; i <= 50; i++) {
      filas.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{i*i}</td>
        </tr>
      );
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
            <tr>
                <th>Cuadrado</th>
            </tr>
            </tr>
          </thead>
          <tbody>
            {filas}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tabla;