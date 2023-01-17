import React from 'react'
import FreeCodeCampLogo from './components/icons/FreeCodeCampLogo';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

function App() {

  const todos = [{text:"Buying black Halls"}];

  return (
    <div className="App">
      <FreeCodeCampLogo/>
      <div className="TodoContainer">
        <h1>My todo's</h1>
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
  );
}

export default App;
