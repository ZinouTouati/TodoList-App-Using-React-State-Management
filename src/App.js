import React, { Component } from 'react';
import './App.css';

import { TodosProvider } from './TodosContext';
import TodoNav from './TodoNav';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export class App extends Component {
  render() {
    return (
      <TodosProvider>
        <div className='app'>
          <div className='todo-list'>
            <TodoNav />
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </TodosProvider>
    );
  }
}

export default App;
