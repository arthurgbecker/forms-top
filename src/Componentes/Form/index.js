import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import Dropdown from "../Dropdown/Dropdown";
import "./Form.css";

export const Form = (props) => {

    const[nome, setNome] = useState('');
    const[cargo, setCargo] = useState('');
    const[imagem, setImagem] = useState('');
    const[time, setTime] = useState('');

    const aoEnviar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        // console.log('Form foi enviado =>', nome, cargo, imagem, time);
    }

    // const aoAlterarNome = (valor) => {
    //     setNome(valor);
    // }

    // const aoAlterarCargo = (valor) => {
    //     setCargo(valor);
    // }

    return (
        <section>
            <form onSubmit={aoEnviar}>

                <h2>Preencha os dados para criar o card do colaborador:</h2>

                <CampoTexto
                obrigatorio={true} 
                label='Nome' 
                placeholder="Digite seu nome" 
                valor={nome} 
                aoAlterar={valor => setNome(valor)}/>
                
                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder="Digite seu cargo" 
                valor={cargo} 
                aoAlterar={valor => setCargo(valor)}/>

                <CampoTexto 
                label='Imagem' 
                placeholder="Insira a URL" 
                valor={imagem} 
                aoAlterar={valor => setImagem(valor)}/>

                <Dropdown
                label='Time' 
                itens= {props.times}                
                valor={time} 
                aoAlterar={valor => setTime(valor)}/>

                <Botao botao="Criar card"/>
            </form>
        </section>
    )
}