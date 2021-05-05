import React, { useState } from 'react';
import { render } from 'react-dom';
import Todos from './components/Todos/Todos';
import './style.css';
import { ITodo } from './interfaces'

const App = () => {
  const [name, setName] = useState('React TS');
  const [todos, setTodos] = useState<ITodo[]>([
    { id: '1', text: 'Grocery Shop', done: false, hello: '2' },
    { id: '2', text: 'Go to the Gym', done: false },
    { id: '3', text: 'Put a blower on car', done: false }
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