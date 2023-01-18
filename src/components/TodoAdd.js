import React from 'react'
import { useRef } from 'react';

function TodoAdd({ todoList, setTodoList }) {

  const todoTextValue = useRef(null);

  function addNewTodo() {
    todoTextValue.current.value && setTodoList([...todoList, {text:todoTextValue.current.value}])
  }

  return (
    <section className='TodoAdd'>
      <input ref={todoTextValue} className='TodoAdd__input' placeholder='Example: Chop onion' type="text" />
      <span onClick={addNewTodo} className='TodoAdd__button'>Add Todo</span>
    </section>
  )
}

export default TodoAdd