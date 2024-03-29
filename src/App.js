import './App.css';
import { useState, useEffect } from 'react';
import { BsBookmarkCheck, BsBookmarkCheckFill, BsTrash } from 'react-icons/bs';

const API = 'http://localhost:5000';

function App() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API + '/todos');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    loadData();
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10000 / 65 ^3); 

    const todo = {
      id: id,
      title,
      time,
      done: false,
  };
    await fetch(API + '/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setTodos((prevState) => [...prevState, todo]);
    setTitle('');
    setTime('');
  };

  const handleDelete = async (id) => {
  try {
    await fetch(API + '/todos/' + id, {
      method: 'DELETE',
    });
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  } catch (error) {
    console.error('Erro ao excluir a tarefa:', error);
  }
};



  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    await fetch(API + '/todos/' + todo.id, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setTodos((prevState) =>
      prevState.map((t) => (t.id === todo.id ? todo : t))
    );
  };

  if (loading) {
    return <p>Carregando..</p>;
  }
  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input
              type="text"
              name="title"
              placeholder="Título da Tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ''}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração:</label>
            <input
              type="text"
              name="time"
              placeholder="Tempo estimado (em horas)"
              onChange={(e) => setTime(e.target.value)}
              value={time || ''}
              required
            />
          </div>
          <input type="submit" value="Criar Tarefa" />
        </form>
      </div>
      <div className="list-todo">
        <h2>Lista de Tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas!</p>}
        {todos.map((todo) => (
          <div className={`todo ${todo.done ? 'todo-done' : ''}`} key={todo.id}>
            <h3>{todo.title}</h3>
            <p>Tempo estimado: {todo.time} horas</p>
            <div>
              <span
                className={!todo.done ? 'todo-icon' : 'todo-icon-done'}
                onClick={() => handleEdit(todo)}
              >
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <span className="trash">
                <BsTrash onClick={() => handleDelete(todo.id)} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
