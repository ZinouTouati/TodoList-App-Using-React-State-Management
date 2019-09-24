import React, { useContext } from 'react';
import './App.css';

import { TodosContext } from './TodosContext';
import TodoList from './TodoList';

export default function({ index, text, isCompleted }) {
  const [Todos, setTodos] = useContext(TodosContext);

  // Create CompleteTodo
  const completeTodo = index => {
    const NewTodos = [...Todos];
    NewTodos[index].isCompleted = true;
    setTodos(NewTodos);
  };

  // Create RemoveTodo
  const removeTodo = index => {
    const NewTodos = [...Todos];
    NewTodos.splice(index, 1);
    setTodos(NewTodos);
  };

  return (
    <div
      className='todo'
      style={{ textDecoration: isCompleted ? 'line-through' : '' }}
    >
      {text}
      <div>
        <button onClick={() => completeTodo(index)} style={Styles.completeBtn}>
          Completed
        </button>
        <button onClick={() => removeTodo(index)} style={Styles.deletBtn}>
          X
        </button>
      </div>
    </div>
  );
}

const Styles = {
  completeBtn: {
    backgroundColor: '#209cee',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 5px',
    marginRight: '5px'
  },
  deletBtn: {
    backgroundColor: 'red',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    padding: '8px 8px'
  }
};
