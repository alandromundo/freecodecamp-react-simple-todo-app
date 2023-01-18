import React from 'react'
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import FreeCodeCampLogo from './components/icons/FreeCodeCampLogo';

function App() {

  const todos = [
    {text: "Buying black Halls"},
    {text: "Create a react app"},
    {text: "Listening a podcast from mamadores experts on spotify"}
  ];

  return (
    <div className="App">
      <div className='TodoApp'>
        <FreeCodeCampLogo/>
        <div className="TodoContainer">
          <h1 className='TodoContainer__title'>My todo's</h1>
          <TodoAdd/>
          <TodoList>
            {todos.map( todo =>
              <TodoItem
                key={todo.text}
                text={todo.text}/>
              )}
          </TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
