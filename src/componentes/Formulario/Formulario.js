import { useState } from "react";
import Boton from "../Boton";
import ListaOpciones from "../ListaOpciones";
import "./Formulario.css"
import Campo from "../Campo";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {RegistrarColaborador, crearEquipo} = props

    const manejarEnvio = (e)=>{
        e.preventDefault();
        console.log("manejar el envio")

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        RegistrarColaborador(datosEnviar)

    }


    const manejarNuevoEquipo = (e)=>{
            e.preventDefault()
            crearEquipo({titulo, colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
            titulo="nombre" 
            required placeholder="Ingresar nombre" 
            valor={nombre} 
            actualizarValor={actualizarNombre} />
        <Campo
            titulo="Puesto" 
            required 
            placeholder="Ingresar puesto"
            valor={puesto} 
            actualizarValor={actualizarPuesto} />

        <Campo 
            titulo ="Foto" 
            required 
            placeholder="Ingresar enlace de foto" 
            valor ={foto}
            actualizarValor={actualizarFoto} />
        <ListaOpciones 
            valor={equipo}
            actualizarEquipo ={actualizarEquipo} 
            equipos= {props.equipos}
            />
        <Boton texto="Crear" />
        </form>

        <form onSubmit={manejarNuevoEquipo} >
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo 
            titulo="titulo" 
            required placeholder="Ingresar titulo" 
            valor={titulo} 
            actualizarValor={actualizarTitulo} />
        <Campo 
            titulo="Color" 
            required 
            placeholder="Ingresar el color em hexadecimal"
            valor={color} 
            actualizarValor={actualizarColor} 
            type="color"
            />

        <Boton texto="Registrar equipo" />

        </form>


    </section>
}

export default Formulario;