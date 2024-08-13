import { formulario } from "../selectores.js";

export default class Notificacion{

    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar(){
        //Crear la notificación
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        //Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        // if (alertaPrevia) {
        //     alertaPrevia.remove();
        // }
        alertaPrevia?.remove(); //Hace lo mismo que el if de arriba

        //Si es de tipo error, agrega una clase
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') :alerta.classList.add('bg-green-500');

        //Mensaje de error
        alerta.textContent = this.texto;

        //Insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        //Quitar despues de 3s
        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
}
