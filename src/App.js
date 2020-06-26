import React,{ useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Counter from './counter'

import {criarNovaTarefa} from './actions/tarefaActions'

function App() {
  const [tarefa,setTarefa] = useState('');
  const [tarefas,setTarefas] = useState([]);

  const dispatch = useDispatch();

  const agregarTarefa = (tarefas) => dispatch(criarNovaTarefa(tarefas));

  const listaTarefas = useSelector(state => state.tarefa.tarefas);
  console.log(listaTarefas);


  function tarefaSubmit(e){
      e.preventDefault();

      if(tarefa.trim() === ''){
        console.log('Esta vazio');
        return;
      }

      setTarefas([
        ...tarefas,
        tarefa
      ])

      setTarefa('');

      agregarTarefa([
        ...tarefas,
        tarefa
      ]);    
    
  }

  return (
    <div className="App">
      <>
        <h1>TODO LIST</h1>
        <hr/>
        
        <form onSubmit={tarefaSubmit}>

            <input 
                type="text" 
                onChange={e => setTarefa(e.target.value)} 
                value={tarefa}  
            />
            <br/><br/>

            <button 
              type="submit">
              Adicionar
            </button>
        </form>
        <br/> <br/>     

      {
        listaTarefas.map(item => (
        <li key={item}>{item}</li>
        ))
      }


      <Counter/>
      </>


    </div>
  );
}

export default App;
