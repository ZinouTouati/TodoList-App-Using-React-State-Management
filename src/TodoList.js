import React, { useContext } from 'react';

import { TodosContext } from './TodosContext';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useContext(TodosContext);
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          text={todo.text}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
}
