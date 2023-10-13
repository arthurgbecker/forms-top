import "./CampoTexto.css"
import { useState } from "react";

const CampoTexto = (props) => {
    //console.log(props)

    //let valor = 'XPTO';

    const [valor, setValor] = useState('');

    const aoDigitar = (evento) =>{
        // setValor(evento.target.value);
        // console.log(valor)

        props.aoAlterar(evento.target.value);
    }



    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
            value={props.valor}
            onChange ={aoDigitar}
            required={props.obrigatorio}
            placeholder={props.placeholder}
            /><br/>
        </div>
    )
}

export default CampoTexto;