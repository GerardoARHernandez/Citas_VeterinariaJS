import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import { citaObj, editando } from './variables.js';
import { formulario, formularioInput, pacienteInput, propietarioInput,emailInput, fechaInput, sintomasInput } from "./selectores.js";


const citas = new AdminCitas();

//Funciones
export function datosCita(e){
    citaObj[e.target.name] = e.target.value;

}

export function enviarCita(e){
    e.preventDefault();

    if (Object.values(citaObj).some(valor => valor.trim() === '' ) ) {
        new Notificacion({
            texto: 'Todos los Campos son Obligatorios', 
            tipo: 'error'
        })
        return
    }

    if (editando.value) {
        citas.editar({...citaObj});

        new Notificacion({
            texto: 'Paciente Actualizado Correctamente', 
            tipo: 'exito'
        })
    }else{
        citas.agregar({...citaObj});

        new Notificacion({
            texto: 'Paciente Registrado', 
            tipo: 'exito'
        })
    }

    formulario.reset();
    reiniciarObjCita();
    formularioInput.value = 'Registrar Paciente';
    editando.value = false;

}

export function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

export function reiniciarObjCita(){
    //Reiniciar el obj
        // citaObj.id = generarId();
        // citaObj.paciente = '';
        // citaObj.propietario = '';
        // citaObj.email = '';
        // citaObj.fecha = '';
        // citaObj.sintomas = '';

    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })
}

export function cargarEdicion(cita){
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true;

    formularioInput.value = 'Guardar Cambios';
}