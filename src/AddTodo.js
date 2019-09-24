import React, { useState, useContext } from 'react';

import { TodosContext } from './TodosContext';

const AddTodo = () => {
  const [Todos, setTodos] = useContext(TodosContext);
  const [text, setText] = useState('');

  // Create UpdateText
  const updateText = e => {
    setText(e.target.value);
  };

  // Create AddTodo
  const addTodo = e => {
    e.preventDefault();
    const NewTodos = [...Todos, { text }];
    setTodos(NewTodos);
    setText('');
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type='text'
        className='input'
        placeholder='Add Todo'
        value={text}
        onChange={updateText}
      />
    </form>
  );
};

export default AddTodo;
