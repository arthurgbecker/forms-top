import "./Dropdown.css"

const Dropdown = (props) => {
    const aoSelecionar = (evento) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className="drop-menu">
            <label>{props.label}</label>
            <select onChange={aoSelecionar} value={props.valor}>
                <option value="">Selecione...</option> {/* Adicionando a opção em branco */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;