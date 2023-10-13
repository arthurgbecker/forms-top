import { useState } from 'react';
import Banner from './Componentes/Banner/Banner';
import { Form } from './Componentes/Form';
import Time from './Componentes/Time';
import Rodape from './Componentes/Rodape/Rodape';

function App() {

  const times = [
    {nome:'Admin',
    corFundo: '#5b9bd5'
    },
    {nome:'Colaboradores',
    corFundo: '#e7e6e6'
    },
    {nome:'Jogadores',
    corFundo: '#5b9bd5'
    },
    {nome:'Espectadores',
    corFundo: '#e7e6e6'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        id={time.nome}
        key={time.nome} 
        nome={time.nome} 
        corFundo={time.corFundo}
      />)}

      <Rodape />
    </div>
  );
}

export default App;