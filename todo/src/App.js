import './App.css';
import { useState,useEffect } from 'react';
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons'

const API= 'http://localhost:5000'

function App() {
  const [title,setTitle] = useState('')
  const [time, setTime]= useState('')
  const [todos, setTodos] = useState([])
  const [loading, Setloading] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('Enviou')
  }

  return (
    <div className="App">
     <div className='todo-header'>
      <h1>React Todo</h1>

     </div>
     <div className='form-todo'>
       <h2>Insera a sua próxima tarefa:</h2>
       <form onSubmit={handleSubmit}>
        <input type='submit' value={'Enviar'}></input>
       </form>

     </div>
      <div className='list-todo'>
        <p>
          <h2>Lista de Tarefas</h2>
          {todos.length === 0 && <p>Não há tarefas!</p>}
        </p>
      </div>
    </div>
  );
}

export default App;
