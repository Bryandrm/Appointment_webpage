import React, {Fragment, useState } from 'react'
import uuid from 'uuid/v4';

const Formulario =({crearCita}) => {

    // crear state de citas

    const[cita, actualizarCita]=useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
        error: false
    });
    const [error, actualizarError ] =useState(false)

    // se ejecuta cada que el usuario escribe en un input


    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }


    const {mascota, propietario, fecha, hora, sintomas}=cita;
    
         // when the button is hitted 
        const submitCita = (e) => {
        e.preventDefault();

        //validate
        if(mascota.trim()==='' || propietario.trim()=== '' || fecha.trim() === '' || hora.trim() ==='' || sintomas.trim()=== '' ){
            console.log('error')
            actualizarError(true)
            return;
        }
        
        actualizarError(false)


        //set ID 

        cita.id =uuid();
        

        // create date
        crearCita(cita)


        //reload form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        
    }


    return(
        <Fragment>
            <h2> Crear Cita</h2>
            {error ? <p className="alerta-error">todos los campos son obligatorios</p> 
            : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de laMascota"
                    onChange={actualizarState}
                    value={propietario}
                />


                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"    
                    onChange={actualizarState}        
                    value={fecha}        
                />

                  <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"     
                    onChange={actualizarState}      
                    value={hora}         
                />

                <label>Sintomas</label>
               <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
               ></textarea>
               <button
                    type="submit"
                    className="u-full-width button-primary"
               >AGREGAR CITA</button>
            </form>
        </Fragment>
    );
}

export default Formulario;