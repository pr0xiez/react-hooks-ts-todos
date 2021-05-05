import React from 'react';
import Todo from './Todo';
import './todos.css';

export default ({ todos, setTodos }) => {
  const todoClicked = id => {
    const newTodos = todos.map(t => {
      return {
        ...t,
        done: t.id === id ? !t.done : t.done
      }
    })
    setTodos(newTodos)
  }

  return (
    <div className="todos">
      <ul className="todos-list">
        {
          todos.map(({ text, id, done }) => (
            <Todo text={text} id={id} done={done} todoClicked={todoClicked}/>
          ))
        }
      </ul>
    </div>
  );
}