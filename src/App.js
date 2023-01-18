import React from 'react'
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import FreeCodeCampLogo from './components/icons/FreeCodeCampLogo';
import { useState } from 'react';

function App() {

  const todos = [
    {text: "Buying black Halls", isCompleted: false},
    {text: "Create a react app", isCompleted: false},
    {text: "Listening a podcast from mamadores experts on spotify", isCompleted: false}
  ];

  const [todoList, setTodoList] = useState(todos);

  return (
    <div className="App">
      <div className='TodoApp'>
        <FreeCodeCampLogo/>
        <div className="TodoContainer">
          <h1 className='TodoContainer__title'>My todo's</h1>
          <TodoAdd todoList={todoList} setTodoList={setTodoList}/>
          <TodoList>
            {todoList.map( todo =>
              <TodoItem
                key={todo.text}
                text={todo.text}
                initialIsCompleted={todo.isCompleted}/>
              )}
          </TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
