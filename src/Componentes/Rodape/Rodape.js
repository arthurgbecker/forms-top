import "./Rodape.css";

function Rodape () {
    return (
        <div className="rodape">
            <div className="loguinhos">
                <img src="/imagens/fb.png" alt="ícone facebook"/>
                <img src="/imagens/ig.png" alt="ícone instagram"/>
                <img src="/imagens/tw.png" alt="ícone twitter"/>
            </div>
            <img id="senai" src="/imagens/senai-logo-1.png" alt="logo senai" width={300}/>
            <p>Desenvolvido por um Humano.</p>
        </div>
    );
}

export default Rodape;