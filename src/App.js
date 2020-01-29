import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  const [citas, guardarCitas]= useState([]);

  // take all registries and adds a new one
  
  const crearCita = (cita) => {
    guardarCitas([...citas , cita]);
    console.log(cita)
  }

  return (
   <Fragment>
      <h1> Administrado de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario
              crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
              <h2>Citas</h2>
              {citas.map(cita => (
                <cita
                
                
                />
              ))}
          </div>
        </div>

      </div>
   </Fragment>
  );
}

export default App;
