import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

import '../styles/App.css';

function App() {
  const listagemFesta = [
    {nome: 'Nicolas', estaNaLista: true, tarefa: 'batata-frita'},
    {nome: 'Pedro', estaNaLista: false, tarefa: 'pizza'},
    {nome: 'Carolina', estaNaLista: true, tarefa: 'bebidas'}
  ]
  return (
    <div className="App">
     <h3>Convidado:</h3>
     {listagemFesta.map(({nome, estaNaLista}) => {
       return (
         <ClassComponent key={nome} nome={nome} estaNaLista={estaNaLista} />
         )
      })}

     <h3>Tarefas: </h3>
     {listagemFesta.map(({nome, tarefa}) => {
       return (
        <FunctionComponent key={nome} nome={nome} tarefa={tarefa} />
         )
      })}
   </div>
    );
}

export default App;
