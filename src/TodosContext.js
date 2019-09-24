import React, { useState, createContext } from 'react';

export const TodosContext = createContext();

export const TodosProvider = props => {
  // Create The State
  const [todos, setTodos] = useState([
    {
      text: 'Make a todoList App',
      isCompleted: false
    },
    {
      text: 'Style The App',
      isCompleted: false
    },
    {
      text: 'Nunc facilisis augue non vestibulum',
      isCompleted: false
    },
    {
      text: 'Get out of Algeria',
      isCompleted: false
    }
  ]);

  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodosContext.Provider>
  );
};
