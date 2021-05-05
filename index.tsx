import './style.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import Todos from './components/Todos/Todos';
import { ITodo } from './interfaces'
import generateGuid from './utils/generateGuid'

const App = () => {
  const [name, setName] = useState('React TS');
  const [todos, setTodos] = useState<ITodo[]>([
    { id: generateGuid(), text: 'Buy groceries', done: false },
    { id: generateGuid(), text: 'Go to the Gym', done: false },
    { id: generateGuid(), text: 'Read a book', done: false },
    { id: generateGuid(), text: 'Get a haircut', done: false },
  ]);

  return (
    <div>
      <h2>Todo:</h2>
      <div className="todos-container">
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));