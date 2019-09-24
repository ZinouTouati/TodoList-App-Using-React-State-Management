import React, { useContext } from 'react';

import { TodosContext } from './TodosContext';

const TodoNav = () => {
  const [todos, setTodos] = useContext(TodosContext);

  return (
    <nav style={navStyle}>
      <h3>TodoList</h3>
      <p>Num Of Todos: {todos.length}</p>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px'
};

export default TodoNav;
